import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const axiosTMDBInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

function App() {

  const getAPI = async ({pageParam}) => {
    return await axiosTMDBInstance.get(`/movie/now_playing?language=ko-KR&page=${pageParam}`)
  }

  const {data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: ['TMDB'],
    queryFn: getAPI,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = lastPage.data.page;
      const totalPages = lastPage.data.total_pages;

      return currentPage < totalPages ? currentPage + 1 : undefined;
    }
  })

  return (
    <>
      <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
        LoadMore
      </button>
      {data?.pages.map((group, idx) => (
        <div key={idx}>
          {group?.data.results.map(movie => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      ))}
    </>
  )
}

export default App
