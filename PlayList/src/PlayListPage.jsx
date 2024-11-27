import styled from "styled-components";
import PlayList from "./component/PlayList";
import { useSelector } from "react-redux";

const PlayListPage = () => {

  const cartItems = useSelector((state) => state.cart);


  

  return (
    <PageContainer>
      <Title>당신이 고른 PlayList</Title>
      <PlayList/>
      <TotalInfoBox>
        <TotalPriceWrapper>
          <TotalPrice>총 가격</TotalPrice>
          <TotalPrice>
            {
              cartItems.cart.reduce((acc, curr) => {
                return acc + (curr.price * cartItems.count[curr.id]);
              }, 0)
            }
          </TotalPrice>
        </TotalPriceWrapper>
      </TotalInfoBox>
    </PageContainer>
  )
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 100px 10% 0;

  box-sizing: border-box;
`

const Title = styled.h1`
  font-family: Yeongdo-Rg;
  text-align: center;
  color: white;

  padding: 50px 0;
  margin: 0;
`

const TotalInfoBox = styled.div`
  width: 80%;

  margin: 50px 0 0;

`

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const TotalPrice = styled.p`
  font-size: 20px;
`

export default PlayListPage;