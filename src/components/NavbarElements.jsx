import {FaBars} from 'react-icons/fa';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  font-family: Inter,serif;
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
    color: #0096FF;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #0096FF;
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3vw;   
`;