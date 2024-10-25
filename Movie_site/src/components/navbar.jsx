import styled from "styled-components"
import {Link} from "react-router-dom";
import * as S from './style/components-style.js';
import { BiMoviePlay, BiSearch } from "react-icons/bi"

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarLeft>
        <S.WATCHA to={'/'}>
          <S.Logo src={'/src/logo/WATCHA.svg'}/>
        </S.WATCHA>
        <IconNav to={'/search'}>
          <BiSearch size="17" color="white"/> 검색
        </IconNav>
        <IconNav to={'/movie-category'}>
          <BiMoviePlay size="17" color="white"/> 영화
        </IconNav>
      </NavbarLeft>
      <SignNav>
        <S.StyledButton to={'/login'} fontSize={'13px'} padding={'0px 12px'} margin={'14px 5px'} hovercolor={'#2C2D2F'}>로그인</S.StyledButton>
        <S.StyledButton to={'/sign-up'} fontSize={'13px'} padding={'0px 12px'} margin={'14px 5px'} backcolor={'#F82F62'} hovercolor={'#FF0558'}>회원가입</S.StyledButton>
      </SignNav>
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
  z-index: 100;
`

const NavbarLeft = styled.div`
  display: flex;
  position: absolute;
  left: 0px;
  width: 50%;
  min-width: 290px;
  background-color: #141517;

  transition: all 0.3s ease;

  @media (max-width: 490px){
    transform: translateX(-300px);
  }
    
  @media (min-width: 850px){
    transform: translateX(-300px);
  }
`

const IconNav = styled(Link)`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 45px;
  margin: 13px 10px;
  color: white;
  font-family: Pretendard-Regular;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
`

const SignNav = styled.div`
  display: flex;
  justify-content: space-between;
`