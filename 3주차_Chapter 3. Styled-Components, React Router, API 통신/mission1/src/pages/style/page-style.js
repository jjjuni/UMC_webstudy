import styled from "styled-components";
import '/src/font.css'

export const ContentContainer = styled.div`
  padding: 60px 0px 0px 240px;
  transition: all 0.3s ease, min-height 0s ease;

  background-color: black;

  min-height: 100vh;

  box-sizing: border-box;

  @media (max-width: 850px){
    padding-left: 0px;
  }
`;

export const ContentBox = styled.div`
  padding: 0px 40px 60px 40px;
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
`

export const Title = styled.h1`
  font-family: ${props => props.font || 'Pretendard-Regular'};

  width: 100%;
  margin: 0 0 10px 0;
  padding: 50px 0 13px;
  color: #fff;
  box-sizing: border-box;
  font-size: 28px;
  border-bottom: 1px solid #1b1c1d;

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`

