import React from 'react';
import '../styles/navbar.css';
import blacklogo from '../assets/BlackLogo.png';
import {Bars, Nav, NavLink, NavMenu,} from './NavbarElements';

const Navbar = () => {
  return (
      <Nav className='Navbar'>
        <div className='NavbarLeft'>
          <img src={blacklogo} alt="Black Logo"/>
          SnapCycle
        </div>
        <div className='NavbarRight'>
          <Bars/>
            <NavMenu>
            <NavLink to='/snapcycle' activeStyle>
                Home
              </NavLink>
              <NavLink to='/demo' activeStyle>
                Demo
              </NavLink> 
              <NavLink to='/team' activeStyle>
                Team
              </NavLink>
            </NavMenu>
        </div>
      </Nav>
  );
};
  
export default Navbar;