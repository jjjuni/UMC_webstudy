import styled from 'styled-components'
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <StyledNavbar>
      <NavWrapper>
        <Title>PlayList</Title>
        <CartIcon to={'/cart'}>
          <BsCart3 size={'30px'}/>
          {cartItems.cart.length > 0 &&
            <CartNum>{Object.values(cartItems.count).reduce((acc, curr) => acc + curr, 0)}</CartNum>
          }
        </CartIcon>
      </NavWrapper>
    </StyledNavbar>
  )
};

export default Navbar

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;

  background-color: #141517;

  display: flex;
  align-content: center;

  border-bottom: 1px solid rgb(34 34 34);
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 0 50px;

  box-sizing: border-box;
  justify-content: space-between;
`

const Title = styled(Link)`
  text-align: center;
  align-content: center;

  font-family: Yeongdo-Rg;
  font-size: 40px;

  color: #00CD3C;

  margin: 10px 0 0;

`

const CartIcon = styled(Link)`
  position: relative;
  display: flex;
  height: 30px;

  color: #00CD3C;
`

const CartNum = styled.p`
  font-size: 16px;
  position: absolute;
  background-color: #141517;

  text-align: center;

  margin: 0;

  width: 20px;
  height: 20px;
  top: -5px;
  right: -5px;

  color: #00CD3C;
`