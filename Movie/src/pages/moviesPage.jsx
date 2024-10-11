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
    let url = "";
    const getMovies = async () => {
      switch (location) {
        case 'now_playing':
          setTitle('상영 중인 영화');
          url = '/movie/now_playing?language=ko-KR&page=1';
          break;
        case 'popular':
          setTitle('인기있는 영화')
          url = '/movie/popular?language=ko-KR&page=1';
          break;
        case 'top_rated':
          setTitle('높은 평가를 받은 영화')
          url = '/movie/top_rated?language=ko-KR&page=1';
          break;
        case 'upcoming':
          setTitle('개봉 예정 중인 영화')
          url = '/movie/upcoming?language=ko-KR&page=1';
          break;
      }

      const movies = await axios.get(import.meta.env.VITE_MOVIE_API_URL + url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      });
      setMovies(movies);
    };
    getMovies();
  }, []);

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

const PosterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  container-name: poster-box;
  container-type: inline-size;
`;