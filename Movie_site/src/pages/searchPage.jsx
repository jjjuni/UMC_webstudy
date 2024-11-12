import * as S from "./_style/page-style";
import { useContext, useEffect, useState } from 'react';
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import useDebounce from "../hooks/useDebounce";
import { axiosTMDBInstance } from "../apis/axios-instance";
import Poster from "../components/poster/poster";
import SearchMovieList from "../components/poster/search-movie-list";
import useTitle from '../hooks/useTitle';

function SearchPage() {
    
  const [searchText, setSearchText] = useState('');

  useTitle('왓챠');

  // const [searchText, setSearchText] = useState('');

  // const debouncedSearchText = useDebounce(searchText, 200);

  // useEffect(() => {

  //   const searchMovie = async () => {

  //     setMovies();

  //     if (debouncedSearchText !== ''){
  //       const { data } = await axiosTMDBInstance.get(`/search/movie?query=${debouncedSearchText}&include_adult=false&language=ko-KR&page=1`);
  //       setMovies(data);
  //     } else {
  //       const { data } = await axiosTMDBInstance.get(`/movie/popular?language=ko-KR&page=1`);
  //       setMovies(data);
  //     }
  //   }

  //   searchMovie();

  // }, [debouncedSearchText])

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <SearchDiv>
          <BiSearch size="18" color="#84868d"/>
          <SearchInput id={'search-input'} placeholder="검색어를 입력해주세요" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        </SearchDiv>
        <SearchMovieList searchText={searchText}/>
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default SearchPage;

const SearchDiv = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  height: 40px;

  background-color: #222326;

  margin: 30px 0 20px;
  padding: 0 0 0 10px;
  border: 0;
  border-radius:10px;

  box-sizing: border-box;
`

const SearchInput = styled.input`
  width: calc(100% - 30px);
  height: 100%;

  font-family: 'Pretendard-Regular';
  font-size: 15px;

  color: white;
  background-color: #222326;
  caret-color: #f82f62;

  padding: 0 0 0 10px;

  border: 0;
  border-radius:10px;
  outline: 0;

  &:placeholder{
    color: #84868d;
  }
`

