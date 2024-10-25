import styled from "styled-components";

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
  text-align: center;
  margin: 0 0 10px 0;
  padding: 50px 0 13px;
  color: #fff;
  box-sizing: border-box;
  font-size: 28px;
`

export const Loading = styled.div`
  height: calc(100% - 107px);
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 50px 0;
  box-sizing: border-box;
`

export const InputText = styled.input`
  font-family: Pretendard-Regular;
  font-size: 15px;

  padding: 0 0 0 10px;
  margin: 0px;
  border: 0px;
  border-bottom: ${props => props.$borderBottom || '0px' };
  border-radius: ${props => props.$borderRadius || '0px'};
  border-color: #9a97a133;

  width: 50%;
  max-width: 330px;
  height: 40px;
  outline: 0;

  box-sizing: border-box;

`

export const SubmitButton = styled.button`
  font-family: Pretendard-Regular;
  width: 50%;
  max-width: 330px;
  height: 40px;
  padding: 0 5px;
  margin: 20px;

  background-color: #F82F62;
  color: white;
  outline: 0;

  border: 0;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover{
    background-color: #FF0558;
  }
`