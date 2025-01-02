import { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css"; // CSS 추가
import "react-resizable/css/styles.css";   // resizable 기능을 위한 CSS 추가
import { axiosPostInstance } from "../apis/axios-instance";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDrag } from "../hooks/useDrag";
import { useRouter } from "next/router";

const Posts = () => {

  const takePost = 3;         // 한 번 요청마다 가져올 게시글 수

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const { handleDragStart, handleDragStop, handleClick } = useDrag();

  const [layouts, setLayouts] = useState({
    row_3: [{}],
    row_2: [{}],
    row_1: [{}],
  });

  const router = useRouter();

  const cols = { row_3: 6, row_2: 6, row_1: 3 }

  const { 
    data: posts, 
    isPending, 
    isError, 
    error, 
    isFetching, 
    hasNextPage, 
    fetchNextPage, 
    isFetchingNextPage 
  } = useInfiniteQuery({
    queryKey: ['getInfinityPosts'],
    queryFn: async ({pageParam}) => {
      const response = await axiosPostInstance.get(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/posts?cursor=${pageParam}&take=${takePost}`)
      generateLayouts(response.data.data)
      return response.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextCursor : undefined;
    },
  })

  const generateLayouts = (data) => {
    const newRow_3 = data.map((item, index) => ({
      ...item ,
      i: item.id.toString(),
      x: (index%cols.row_3) * 2,
      y: 0,
      w: 2,
      h: 2,
    }));

    const newRow_2 = data.map((item, index) => ({
      ...item ,
      i: item.id.toString(),
      x: (layouts.row_2.length-1 + index) % 2 * 3,
      y: 0,
      w: 3,
      h: 2,
    }));

    const newRow_1 = data.map((item, index) => ({
      ...item ,
      i: item.id.toString(),
      x: 0,
      y: 0,
      w: 3,
      h: 2,
    }));

    setLayouts((prevLayouts) => ({
      row_3: [...(prevLayouts.row_3 || []), ...newRow_3],
      row_2: [...(prevLayouts.row_2 || []), ...newRow_2],
      row_1: [...(prevLayouts.row_1 || []), ...newRow_1],
    }))
  }

  return (
    <>
      <ResponsiveGridLayout
        className="layout w-[100%] rounded-[5px]"
        layouts={layouts}
        breakpoints={{ row_3: 1000, row_2: 600, row_1: 500 }}
        cols={cols}
        isResizable={false}
        isDraggable={false}
        // onDragStart={handleDragStart}
        // onDragStop={handleDragStop}
        rowHeight={150}
      >
        {posts?.pages?.map((page) => (
          page?.data?.map((post) => (
            <div key={post.id} className={`text-center content-center text-white bg-[--border-color] rounded-[5px] select-none overflow-hidden`}>
              <button 
              
                className={`w-full h-full flex items-center justify-center`}
                onClick={() => router.push(`/post/${post.id}`)}>
              
                {post.imageUrl !== null &&
                  <img className={`z-0 w-full h-full absolute object-cover`} src={`${process.env.NEXT_PUBLIC_LOCAL_HOST}/${post.imageUrl}`}/>
                }
                <p className="z-10">{post.title}</p>
                
              </button>
            </div>
          ))
        ))}

      </ResponsiveGridLayout>

      <button 
        onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}
        className=" disabled:text-[#ffffff4d]">
      +</button>
    </>
  )
}

export default Posts;