import styled from "styled-components"
import {Link} from "react-router-dom";
import * as S from './style/components-style.js';
import { BiMoviePlay, BiSearch } from "react-icons/bi"

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarLeft>
        <S.WATCHA to={'/'}>WATCHA</S.WATCHA>
        <IconBox to={'/search'}>
          <BiSearch size="17" color="white"/> 검색
        </IconBox>
        <IconBox to={'/movie-category'}>
          <BiMoviePlay size="17" color="white"/> 영화
        </IconBox>
      </NavbarLeft>
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
  justify-content: end;
  background-color: #141517;
  padding: 0px 40px 0px 0px;
  box-sizing: border-box;
  z-index: 3;
`

const NavbarLeft = styled.div`
  display: flex;
  position: absolute;
  left: 0px;
  width: 50%;
  min-width: 275px;
  background-color: #141517;

  transition: all 0.3s ease;

  @media (max-width: 490px){
    transform: translateX(-300px);
  }
    
  @media (min-width: 850px){
    transform: translateX(-300px);
  }
`

const IconBox = styled(Link)`
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 13px 10px;
  color: white;
  font-family: Pretendard-Regular;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
`

const SignBox = styled.div`
  display: flex;
  justify-content: space-between;
`