import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Poster from "../../components/poster/poster.jsx";

import { ClipLoader } from "react-spinners";

import * as S from "../_style/page-style.js";
import { axiosTMDBInstance } from "../../apis/axios-instance.js";
import useTitle from '../../hooks/useTitle.js';
import CardSkeletonList from "../../components/poster/card-skeleton-list.jsx";
import useGetInfiniteMovies from "../../hooks/queries/useGetInfiniteMovies.js";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

function MoviesPage() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const { category } = useParams();
  
  useTitle('왓챠');

  useEffect(() => {
    switch (category) {
      case "now_playing":
        setTitle("상영 중인 영화");
        setUrl("/movie/now_playing?language=ko-KR&page=1");
        break;
      case "popular":
        setTitle("인기있는 영화");
        setUrl("/movie/popular?language=ko-KR&page=1");
        break;
      case "top_rated":
        setTitle("높은 평가를 받은 영화");
        setUrl("/movie/top_rated?language=ko-KR&page=1");
        break;
      case "upcoming":
        setTitle("개봉 예정 중인 영화");
        setUrl("/movie/upcoming?language=ko-KR&page=1");
        break;
    };
  }, [category]);

  const { 
    data: movies, 
    isPending, 
    isError, 
    error, 
    isFetching, 
    hasNextPage, 
    fetchNextPage, 
    isFetchingNextPage 
  } = useGetInfiniteMovies(category)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && !isFetching && hasNextPage){
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage])

  // const getMovies = async () => {
  //   return await axiosTMDBInstance.get(url)
  // }

  // const {data: movies, isLoading, isError} = useInfiniteQuery({
  //   queryKey: ['getMovies', url],
  //   queryFn: getMovies,
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, allPages) => {
  //     const currentPage = lastPage.data.page;
  //     const totalPages = lastPage.data.total_pages;

  //     return currentPage < totalPages ? currentPage + 1 : undefined;
  //   }
  // })
  
  return (
    
    <S.ContentContainer>
      <S.ContentBox>
        <S.Title>{title}</S.Title>
        {isPending ? (
          <S.PosterBox>
            <CardSkeletonList num={20}/>
          </S.PosterBox>
        ) : isError? (
          <S.Loading>에러!</S.Loading>
        ) : (
          <S.PosterBox>
            {movies?.pages?.map((page) => {  
              return page?.results?.map((movie => {
                return <Poster key={movie.id} movie={movie}/>
              }))
            })}
            {isFetching && <CardSkeletonList num={20}/>}
            <div ref={ref}/>
            {isFetching && 
              <Loading>
                <ClipLoader 
                  color="#FFFFFF"
                  cssOverride={{}}
                  loading
                  size={35}
                  speedMultiplier={0.7}
                />
              </Loading>
            }
          </S.PosterBox>
        )}
        
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default MoviesPage;

const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin: 50px 0;
`


