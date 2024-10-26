import * as S from "./style/page-style";
import { useEffect } from 'react';

function SearchPage() {
  
  useEffect(() => {
      document.title = `왓챠`
  })

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.Title>검색</S.Title>
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default SearchPage;
