'use client'
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbPencilPlus } from "react-icons/tb";
import { axiosPostInstance } from '@/pages/apis/axios-instance'
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const PostPage = () => {
  const [image, setImage] = useState(null);
  const router = useRouter();
  const {
    data,
    isPending,
  } = useQuery({
    queryKey: ['getPost'],
    queryFn: async () => {
      const response = await axiosPostInstance.get(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/posts/${router.query.id}`)
      console.log(response)
      setImage(response.data.imageUrl)
      return response;
    },
    placeholderData: keepPreviousData,    // 다음 페이지 이동 시 깜빡임 방지 (이전 데이터 유지 -> 새로운 데이터 불러오면 바꿔치기)
  })

  return (
    <>
      {isPending ? (
        <div className="content-center w-full flex justify-center h-[700px] items-center">
          <ClipLoader
            color="#FFFFFF"
            cssOverride={{}}
            loading
            size={35}
            speedMultiplier={0.7}
          />
        </div>
      ) : (
        <>
          <div className="w-[80%]">
            <p className="w-full h-[50px] rounded-[5px] bg-[--input-background] text-[--foreground] p-[10px] text-[20px] outline-none border-[1px] border-[--border-color] text-start" >{data?.data?.title}</p>

            {image !== null &&
              <>
                <div className="h-[10px]" />
                <img src={`${process.env.NEXT_PUBLIC_LOCAL_HOST}/${image}`} />
              </>
            }

            <div className="h-[10px]" />

            <textarea
              readOnly
              className="whitespace-pre-wrap break-words w-full h-[600px] rounded-[5px] bg-[--input-background] text-[--foreground] text-[17px] p-[10px] font-thin border-[1px] border-[--border-color] outline-none resize-none"
              value={data?.data?.content} />

          </div>
        </>
      )}
    </>
  )
}

export default PostPage;