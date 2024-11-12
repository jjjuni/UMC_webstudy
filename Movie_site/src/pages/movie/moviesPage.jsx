import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Poster from "../../components/poster/poster.jsx";

import { ClipLoader } from "react-spinners";

import * as S from "../_style/page-style.js";
import { axiosTMDBInstance } from "../../apis/axios-instance.js";
import useTitle from '../../hooks/useTitle.js';
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../components/poster/card-skeleton.jsx";
import CardSkeletonList from "../../components/poster/card-skeleton-list.jsx";

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

  const getMovies = async () => {
    return await axiosTMDBInstance.get(url)
  }
  
  const { data: movies, isLoading, isError } = useQuery({
    queryKey: ["getMovies", url],
    queryFn: getMovies,
  })
  
  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.Title>{title}</S.Title>
        {isLoading ? (
          <S.PosterBox>
            <CardSkeletonList num={20}/>
          </S.PosterBox>
          // <S.Loading>
          //   <ClipLoader 
          //     color="#FFFFFF"
          //     cssOverride={{}}
          //     loading
          //     size={35}
          //     speedMultiplier={0.7}
          //   />
          // </S.Loading>
        ) : isError? (
          <S.Loading>에러!</S.Loading>
        ) : (
          <S.PosterBox>
            {movies?.data?.results?.map((movie) => (
              <Poster key={movie.id} movie={movie} isLoading={isLoading}/>
            ))}
          </S.PosterBox>
        )}
        
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default MoviesPage;



