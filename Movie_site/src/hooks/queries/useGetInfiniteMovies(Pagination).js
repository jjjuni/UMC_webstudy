import { useInfiniteQuery } from "@tanstack/react-query";
import useGetMovies from "./useGetMovies";

function useGetInfiniteMovies(category, currentPage){
  return useInfiniteQuery({
    queryKey: ['getMovies', category],
    queryFn: ({pageParam}) => useGetMovies({category, pageParam}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const totalPages = lastPage?.total_pages;
      console.log(currentPage, totalPages)
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    getPreviousPageParam: () => {
      return currentPage > 1 ? currentPage - 1 : undefined;
    }
  })
}

export default useGetInfiniteMovies;