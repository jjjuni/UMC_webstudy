import { useParams } from "react-router-dom";
import * as S from "./style/page-style";
import styled from "styled-components";

import { ClipLoader } from 'react-spinners';

import useCustomFetch from "../hooks/useCustomFetch.js";

function Movies() {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
  const movie = data.data;
  console.log(movieId);

  return (
    <S.ContentContainer>
      <S.ContentBox $padding={'0 0 60px 0'}>
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
          <MovieDetail>
            <Title>{movie?.title}</Title>
            <DetailBox>
              <Detail>
                <Info $color={"white"}>평균 {movie?.vote_average.toFixed(1)}</Info>
                <Info>·</Info>
                <Info>{movie?.release_date}</Info>
                <Info>·</Info>
                <Info>{Math.floor(movie?.runtime/60)}시간 {(movie?.runtime%60)}분</Info>
                
                {movie?.genres.map((genre) => (
                  <Detail key={genre.id}>
                    <Info>·</Info>
                    <Info>{genre.name}</Info>
                  </Detail>
                ))}
              </Detail>
            </DetailBox>
            <Summary>{movie?.overview}</Summary>
            <Backdrop src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}/>
            <BackdropGradation></BackdropGradation>
          </MovieDetail>
        )}
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default Movies;

const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 375px;
  box-sizing: border-box;

  border-bottom: 1px solid #1b1c1d;
`

const Backdrop = styled.img`
  position: absolute;
  right: 0;
  width: 70%;
  height: 100%;
  object-fit: cover;
`;

const BackdropGradation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  object-fit: cover;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
              linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  pointer-events: none;
`

const Title = styled.h1`
  color: white;
  font-family: Pretendard-Regular;
  font-size: 40px;

  margin: 100px 40px 10px;

  z-index: 10;
`

const DetailBox = styled.div`
  display: flex;
  justify-content: start;

  margin: 0px 40px;

  z-index: 10;
`

const Detail = styled.div`
  display: flex;
  gap: 8px;
`

const Summary = styled.p`
  color: ${props => props.$color || '#84869D'};
  font-family: Pretendard-Regular;
  font-size: 15px;
  overflow: auto;


  width: 45%;
  padding: 20px 40px 75px;
  margin: 0;

  z-index: 10;

  box-sizing: border-box;

  @media(max-width: 850px){
    width: 100%;
  }
`

const Info = styled.p`
  color: ${props => props.$color || '#BABAC1'};
  font-family: Pretendard-Regular;
  font-size: 15px; 
`