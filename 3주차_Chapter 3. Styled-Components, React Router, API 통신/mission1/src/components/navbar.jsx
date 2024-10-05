import styled from "styled-components"
import {Link} from "react-router-dom";
import * as S from './style/components-style.js';

function Navbar() {
  return (
    <StyledNavbar>
      <S.WATCHA to={'/'}>WATCHA</S.WATCHA>
      <SignBox>
        <S.StyledButton to={'/login'} fontSize={'13px'} padding={'0px 12px'} margin={'14px 5px'} hovercolor={'#2C2D2F'}>로그인</S.StyledButton>
        <S.StyledButton to={'/sign-up'} fontSize={'13px'} padding={'0px 12px'} margin={'14px 5px'} backcolor={'#F82F62'} hovercolor={'#FF3D6E'}>회원가입</S.StyledButton>
      </SignBox>
    </StyledNavbar>
  )
}

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  background-color: #141517;
  padding: 0px 40px 0px 0px;
  box-sizing: border-box;
  z-index: 3;
`

const SignBox = styled.div`
  display: flex;
  justify-content: space-between;
`