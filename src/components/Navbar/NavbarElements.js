
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  font-family: Inter;
  font-size: 3vh;
  color: black;
  text-align: center;
  height: 5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
  
export const NavLink = styled(Link)`
  color: black;
  justify-content: space-around;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: lightblue;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justif-content: center;
  column-gap: 3vw;   
  width = 100vw;
`;