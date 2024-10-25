import * as S from './style/page-style';
import { useEffect } from 'react';

function LoginPage() {


  useEffect(() => {
    document.title = `왓챠 | 로그인`
  })

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.SignBox>
          <S.Title>로그인</S.Title>
          <S.InputText placeholder='이메일을 입력해주세요' $borderBottom={'1px solid'} $borderRadius={'5px 5px 0 0'}/>
          <S.InputText placeholder='비밀번호를 입력해주세요' $borderRadius={'0 0 5px 5px'} type={'password'}/>
          <S.SubmitButton>로그인</S.SubmitButton>
        </S.SignBox>
      </S.ContentBox>
    </S.ContentContainer>
  )
}

export default LoginPage;