import * as S from './_style/page-style';
import styled from 'styled-components';
import useTitle from '../hooks/useTitle';
import { useEffect } from 'react';
import MovieList from '../components/list/movie-list';
import { axiosTMDBInstance } from '../apis/axios-instance';
import { useQuery } from '@tanstack/react-query';

function HomePage() {

  useTitle('왓챠');

  const getMovies = async (category) => {
    return await axiosTMDBInstance.get(`/movie/${category}?language=ko-KR&page=1`);
  }

  const { data: nowPlayingData } = useQuery({
    queryKey: ["getMovies", 'now_playing'],
    queryFn: () => getMovies('now_playing'),
  })
  const { data: popularData } = useQuery({
    queryKey: ["getMovies", 'popular'],
    queryFn: () => getMovies('popular'),
  })

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <Logo src={"/src/logo/WATCHA_White.svg"} />
        <ListTitle>최신 영화</ListTitle>
        <MovieList moviesData={nowPlayingData}/>
        <ListTitle>오늘의 TOP 20</ListTitle>
        <MovieList moviesData={popularData}/>

      </S.ContentBox>
    </S.ContentContainer>
  )
}

export default HomePage;

export const Logo = styled.img`
  height: 50px;
  padding: 30px 0;
  margin: 0 0 50px;
  border-bottom: 1px solid #1b1c1d;
`

const ListTitle = styled.h1`
  font-family: var(--font-default);
  font-size: 20px;
  color: white;

  margin: 5px 20px;
`;