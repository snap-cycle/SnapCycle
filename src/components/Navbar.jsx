import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import BlackLogo from "../assets/Branding/BlackLogo.png";
import SnapCycleTitle from "../assets/NavBar/SnapCycleTitle.png";
import HamburgerMenu from "../assets/NavBar/HamburgerMenu.jpg";
import OutlineButton from "./OutlineButton";
import "../styles/components/Navbar.css";

const Navbar = ({ pages }) => {
  const [showPartialBackground, setPartialBackground] = useState(false);
  const [showSolidBackground, setSolidBackground] = useState(false);
  const [showNavBar, setNavBar] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);
  const partialThreshold = 75;
  const solidThreshold = 150;
  const navBarThreshold = 550;

  const handleNavigation = useCallback((e) => {
      const window = e.currentTarget;

      //If past home panel and scrolling down, nav bar dissapears. If scroll up, reappears
      if (window.scrollY > navBarThreshold && currentScroll < window.scrollY)
        setNavBar(false);
      else setNavBar(true);
      
      setCurrentScroll(window.scrollY);
  }, [currentScroll]);

  //useEffect to track whether user has scrolled up or down last
  useEffect(() => {
    setCurrentScroll(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  //useEffect to change appearance of navbar when it is at top of page
  useEffect(() => {

    const handleScroll = () => {
      //If scrolled down once, show partial translucent background
      if (window.scrollY > partialThreshold) setPartialBackground(true);
      else setPartialBackground(false);
      
      //If scrolled down two or more times, show full background
      if (window.scrollY > solidThreshold) setSolidBackground(true);
      else setSolidBackground(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='NavBarContainer'
      id={showNavBar ? (showPartialBackground ? (showSolidBackground ? "NavBarSolid" : "NavBarPartial") : "NavBarTransparent") : "NavBarDissapear"}>
      <div className="NavBar">
        <div className='NavBarLogoAndName'>
          <img src={BlackLogo} alt="SnapCycle Logo" className="NavBarLogo" />
          <img src={SnapCycleTitle} alt="SnapCycle Title" className='NavBarTitle' />
        </div>
        <div className='NavBarPages'>
          {pages.map((page) => (
            <NavbarPageItem page={page} key={page} />
          ))}
        </div>
        <div className='RightContainer'>
          <div className='ButtonContainer'>
            <OutlineButton title="Try Now" destination="/demo"/>
          </div>
          <img src={HamburgerMenu} alt="Hamburger Menu" className='HamburgerMenu' />
        </div>
      </div>
    </div>
  );
};

const NavbarPageItem = ({ page }) => {
  const destination = "/" + page.toLowerCase();
  const location = useLocation();
  const navigate = useNavigate();
  const goToLocation = (location) => {
    navigate(location);
  };

  return (
    <div
      className={location.pathname === destination ? "NavBarPagesActive" : "NavBarPagesInactive"}
      onClick={() => goToLocation(destination)}
    >
      {page}
    </div>
  );
};

export default Navbar;