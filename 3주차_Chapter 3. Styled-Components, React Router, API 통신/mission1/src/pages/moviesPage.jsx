import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Poster from './moviesPage_components/poster.jsx';
import axios from "axios";

import styled from "styled-components";

import * as S from "./style/page-style";

function MoviesPage() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState('');

  const location = useLocation().pathname.split('/').pop();

  useEffect(() => {
    const getMovies = async () => {
      switch (location) {
        case 'now_playing':
          setTitle('상영 중인 영화');
          setUrl('/movie/now_playing?language=en-US&page=1');
          break;
        case 'popular':
          setTitle('인기있는 영화')
          setUrl('/movie/popular?language=en-US&page=1');
          break;
        case 'top_rated':
          setTitle('높은 평가를 받은 영화')
          setUrl('/movie/top_rated?language=en-US&page=1');
          break;
        case 'upcoming':
          setTitle('개봉 예정 중인 영화')
          setUrl('/movie/upcoming?language=en-US&page=1');
          break;
      }

      if (!url) return;           // setUrl 하기 전 (switch문 돌기 전) axios 요청 방지
                                  // 일단 해결은 했는데 메모리(?) 문제는 없는건가?

      const movies = await axios.get(import.meta.env.VITE_MOVIE_API_URL + url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      })
      setMovies(movies);
    };
    getMovies();
  }, [url, location, title]);

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.Title>{title}</S.Title>
        <PosterBox>
          {movies.data?.results.map((movie) => (
            <Poster key={movie.id} movie={movie}/>
          ))}
        </PosterBox>
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default MoviesPage;

const PosterBox = styled.div``;
