import Poster from "./poster.jsx";
import { axiosTMDBInstance } from "../apis/axios-instance";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce.js";
import PropTypes from 'prop-types';
import useCustomFetch from "../hooks/useCustomFetch.js";
import { ClipLoader } from "react-spinners";

const SearchMovieList = ({searchText}) => {
  const [url, setUrl] = useState(`/movie/popular?language=ko-KR&page=1`)
  const debouncedSearchText = useDebounce(searchText, 200);
  const [movies, setMovies] = useState(null);

  const { response, isLoading, isError } = useCustomFetch(url, axiosTMDBInstance);

  useEffect(() => {
    setMovies();
    if(debouncedSearchText === ''){
      setUrl(`/movie/popular?language=ko-KR&page=1`)
    }
    else{
      setUrl(`/search/movie?query=${debouncedSearchText}&language=ko-KR&page=1`)
    }
    setMovies(response.data)
  }, [debouncedSearchText, response])


  return (
    <>
      {isLoading ? (
        <Loading>
        <ClipLoader
          color="#FFFFFF"
          cssOverride={{}}
          loading
          size={35}
          speedMultiplier={0.7}
        />
      </Loading>
      ) : (
      movies &&(
        movies.results?.length > 0? (
          <>
            {debouncedSearchText !== '' ? (
              <SearchTitle> 검색 </SearchTitle>
            ) : (
              <SearchTitle> 이런 영화는 어떠신가요? </SearchTitle>
            )}
            <PosterBox>
              {movies?.results?.map((movie) => (
                <Poster key={movie.id} movie={movie} />
              ))}
            </PosterBox>
          </>
        ):(
          <SearchTitle $fontSize={'20px'}>입력하신 검색어 `{debouncedSearchText}`(와)과 일치하는 결과가 없습니다 </SearchTitle>
        )
      ))}
    </>
  )
}

export default SearchMovieList;

const SearchTitle = styled.h1`
  font-family: ${props => props.$font || 'Pretendard-Regular'};
  width: 100%;
  margin: 0 0 10px;
  padding: 10px 10px 10px;
  border-bottom: 1px solid #141517;
  color: #fff;
  box-sizing: border-box;
  font-size: 20px;
`

const PosterBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  container-name: poster-box;
  container-type: inline-size;
`;

const Loading = styled.div`
  height: calc(100% - 107px);
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

SearchMovieList.propTypes = {
  searchText: PropTypes.string.isRequired,
};