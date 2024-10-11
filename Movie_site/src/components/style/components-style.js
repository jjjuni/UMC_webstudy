import { Link } from "react-router-dom";
import styled from "styled-components";

export const WATCHA = styled(Link)`
  font-size: 25px;
  color: #F82F62;
  font-family: Tium;

  margin: 0px 0px 0px 20px;

  height: 60px;
  box-sizing: border-box;

  align-content: center;

  text-decoration: none;
  padding: 8px 12px 3px;
`;

export const StyledLink = styled(Link)`
  font-size: ${props => props.fontSize || '15px'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  color: white;
  font-family: Pretendard-Regular;

  display: flex;

  text-decoration: none;
`;

export const StyledButton = styled(Link)`
  font-size: ${props => props.fontSize || '15px'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};

  background-color: ${props => props.backcolor || '#141517'};
  color: white;
  font-family: Pretendard-Regular;

  display: flex;
  align-items: center;

  text-decoration: none;

  border-radius: 4px;

  &:hover{
    background-color: ${props => props.hovercolor || '#141517'};
  };
`

export const IconBox = styled.div`
  margin: 0px 10px 0px 0px;
`