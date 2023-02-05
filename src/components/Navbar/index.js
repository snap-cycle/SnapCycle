import React from 'react';
import '../Navbar/navbar.css'; 
import blacklogo from '../../resources/blacklogo.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav className='Navbar'>
        <div className='NavbarLeft'>
          <img src={blacklogo}/>
          SnapCycle
        </div>
        <div className='NavbarRight'>
          <Bars />
  
            <NavMenu>
            <NavLink to='/' activeStyle>
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
    </>
  );
};
  
export default Navbar;