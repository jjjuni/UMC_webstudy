import * as S from "./style/page-style";
import { useEffect, useState } from 'react';
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import useDebounce from "../hooks/useDebounce";
import { axiosTMDBInstance } from "../apis/axios-instance";
import Poster from "../components/poster";

function SearchPage() {
  
  const [movies, setMovies] = useState(null);

  useEffect(() => {
      document.title = `왓챠`
  })

  const [searchText, setSearchText] = useState('');

  const debouncedSearchText = useDebounce(searchText, 200);

  useEffect(() => {

    const searchMovie = async () => {
      if (debouncedSearchText !== ''){
        const { data } = await axiosTMDBInstance.get(`/search/movie?query=${debouncedSearchText}&include_adult=false&language=ko-KR&page=1`);
        setMovies(data);
      } else {
        const { data } = await axiosTMDBInstance.get(`/movie/popular?language=ko-KR&page=1`);
        setMovies(data);
      }
    }

    searchMovie();

  }, [debouncedSearchText])

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <SearchDiv>
          <BiSearch size="18" color="#84868d"/>
          <SearchInput id={'search-input'} placeholder="검색어를 입력해주세요" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        </SearchDiv>
        {movies &&(
          movies.results?.length > 0? (
            <>
              {debouncedSearchText !== '' ? (
                <SearchTitle> 검색 </SearchTitle>
              ) : (
                <SearchTitle> 이런 영화는 어떠신가요? </SearchTitle>
              )}
              <S.PosterBox>
                {movies.results.map((movie) => (
                  <Poster key={movie.id} movie={movie} />
                ))}
              </S.PosterBox>
            </>
          ):(
            <SearchTitle $fontSize={'20px'}>검색 결과가 없습니다</SearchTitle>
          )
        )}
        
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