import { axiosTMDBInstance } from '../../apis/axios-instance.js'

const useGetMovies = async({category, pageParam}) => {
  const {data} = await axiosTMDBInstance.get(`/movie/${category}?language=ko-KR&page=${pageParam}`)
  return data;
}

export default useGetMovies;