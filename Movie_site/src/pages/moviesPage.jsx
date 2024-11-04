import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Poster from "../components/poster.jsx";

import styled from "styled-components";
import { ClipLoader } from "react-spinners";

import * as S from "./style/page-style";
import useCustomFetch from "../hooks/use-custom-fetch.js";
import { axiosTMDBInstance } from "../apis/axios-instance.js";

function MoviesPage() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const { category } = useParams();
  
  useEffect(() => {
    document.title = `왓챠`
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
  
  const { response: movies, isLoading, isError } = useCustomFetch(url, axiosTMDBInstance);

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.Title>{title}</S.Title>
        {isLoading ? (
          <S.Loading>
            <ClipLoader 
              color="#FFFFFF"
              cssOverride={{}}
              loading
              size={35}
              speedMultiplier={0.7}
            />
          </S.Loading>
        ) : isError? (
          <S.Loading>에러!</S.Loading>
        ) : (
          <PosterBox>
            {movies.data?.results.map((movie) => (
              <Poster key={movie.id} movie={movie} />
            ))}
          </PosterBox>
        )}
        
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default MoviesPage;

const PosterBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  container-name: poster-box;
  container-type: inline-size;
`;

