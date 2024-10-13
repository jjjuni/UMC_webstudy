import * as S from "./style/page-style";
import { useEffect } from 'react';

function SignUpPage() {
  
  useEffect(() => {
      document.title = `왓챠 | 회원가입`
  })

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.Title>회원가입</S.Title>
      </S.ContentBox>
    </S.ContentContainer>
  );
}

export default SignUpPage;
