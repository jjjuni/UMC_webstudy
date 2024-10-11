import styled from "styled-components";
import { ClipLoader } from 'react-spinners';

export const ContentContainer = styled.div`
  padding: 60px 0px 0px 240px;
  transition: all 0.3s ease, min-height 0s ease;

  background-color: black;

  min-height: 100vh;

  box-sizing: border-box;

  display: flex;

  @media (max-width: 850px){
    padding-left: 0px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.$padding || '0px 40px 60px 40px'};
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
`

export const Title = styled.h1`
  font-family: ${props => props.$font || 'Pretendard-Regular'};

  width: 100%;
  margin: 0 0 10px 0;
  padding: 50px 0 13px;
  color: #fff;
  box-sizing: border-box;
  font-size: 28px;
  border-bottom: 1px solid #1b1c1d;
`

export const Loading = styled.div`
  height: calc(100% - 107px);
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`