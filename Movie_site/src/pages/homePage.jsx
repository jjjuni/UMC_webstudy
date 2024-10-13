import * as S from './style/page-style';
import styled from 'styled-components';

function HomePage(){
    return (
        <S.ContentContainer>
            <S.ContentBox>
                <Logo src={"/src/logo/WATCHA_White.svg"}/>
            </S.ContentBox>
        </S.ContentContainer>
    )
}

export default HomePage;

export const Logo = styled.img`
  height: 50px;
  padding: 30px 0;
  border-bottom: 1px solid #1b1c1d;
`