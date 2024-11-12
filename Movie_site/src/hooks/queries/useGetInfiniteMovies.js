import { useInfiniteQuery } from "@tanstack/react-query";
import useGetMovies from "./useGetMovies";

function useGetInfiniteMovies(category){
  return useInfiniteQuery({
    queryKey: ['getMovies', category],
    queryFn: ({pageParam}) => useGetMovies({category, pageParam}),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = lastPage?.page;
      const totalPages = lastPage?.total_pages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    }
  })
}

export default useGetInfiniteMovies;