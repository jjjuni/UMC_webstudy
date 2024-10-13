import * as S from './style/page-style';
import { useEffect } from 'react';

function LoginPage(){

    
    useEffect(() => {
        document.title = `왓챠 | 로그인`
    })

    return (
        <S.ContentContainer>
            <S.ContentBox>
                <S.Title>로그인</S.Title>
            </S.ContentBox>
        </S.ContentContainer>
    )
}

export default LoginPage;