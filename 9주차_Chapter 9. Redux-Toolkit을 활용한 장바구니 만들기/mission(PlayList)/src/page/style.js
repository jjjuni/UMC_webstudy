import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 300px);
  padding: 100px 10% 0;

  box-sizing: border-box;
`

export const Title = styled.h1`
  font-family: Yeongdo-Rg;
  text-align: center;
  color: white;

  width: 80%;

  padding: 50px 0;
  margin: 0;
`

export const ListTop = styled.div`
  width: 80%;
  height: 60px;
  padding: 0 15px;
  border-bottom: 1px solid rgb(34 34 34);
  display: flex;
  justify-content: flex-end;
`

export const DeleteButton = styled.button`
  background-color: #0e0f10;
  border: 0;
  padding: 20px 0;
  width: calc(30% - 100px );
  max-width: 200px;
  min-width: 50px;

  color: #e55e4a;
  font-family: Pretendard-Regular;

  cursor: pointer;

  &:disabled{
    color: #e55e4a57;
    cursor: context-menu;
  }
`

export const TotalInfoBox = styled.div`
  width: 80%;

  margin: 50px 0 0;
`

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalPrice = styled.p`
  font-size: 20px;
`