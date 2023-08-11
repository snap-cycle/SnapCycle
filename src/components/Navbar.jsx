import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import BlackLogo from "../assets/Branding/BlackLogo.png";
import WhiteLogo from "../assets/Branding/WhiteLogo.png";
import BlackSnapCycleTitle from "../assets/Title/TitleBlack.png";
import WhiteSnapCycleTitle from "../assets/Title/TitleWhite.png";
import HamburgerIcon from "../assets/NavBar/HamburgerMenu.svg";
import OutlineButton from "./OutlineButton";
import "../styles/Navbar/Navbar.css";
import "../styles/Navbar/HamburgerMenu.css";
import * as PagesInfo from "../Info/PagesInfo";

const Navbar = () => {
  const [showHamburgerMenu, setHamburgerMenu] = useState(false);

  const updateHamburgerMenu = () => {
    setHamburgerMenu(showHamburgerMenu => !showHamburgerMenu);

    if (showHamburgerMenu) document.body.style.overflow = 'auto'; //sets scrollbar based on if menu is open or not
    else document.body.style.overflow = 'hidden';                 //glitch with this? should be the opposite results

    console.log(document.body.style.overflow);
    console.log(showHamburgerMenu);
  };

  //useEffect to close hamburger menu whenever window is large enough to not need it
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setHamburgerMenu(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
      <ActiveNavbar updateHamburgerMenu={updateHamburgerMenu}/>
      <HamburgerMenu showHamburgerMenu={showHamburgerMenu} updateHamburgerMenu={updateHamburgerMenu}/>
    </div>
  );
}


const ActiveNavbar = ({updateHamburgerMenu}) => {
  const [showPartialBackground, setPartialBackground] = useState(false);
  const [showSolidBackground, setSolidBackground] = useState(false);
  const [showNavBar, setNavBar] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);
  const partialThreshold = 75, solidThreshold = 150, navBarThreshold = 550;

  const handleNavigation = useCallback((e) => {
      const window = e.currentTarget;
      //If past home panel and scrolling down, nav bar disappears. If scroll up, reappears
      if (window.scrollY > navBarThreshold && currentScroll < window.scrollY) setNavBar(false);
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
    <div className='NavbarContainer'>
      <div className='ActiveNavbarContainer' id={showNavBar ? (showPartialBackground ? (showSolidBackground ? "NavbarSolid" : "NavbarPartial") : "NavbarTransparent") : "NavbarDissapear"}>
        <div className="ActiveNavbar">
          <div className='NavbarLogoAndName'>
            <img src={BlackLogo} alt="SnapCycle Logo" className="NavbarLogo" />
            <img src={BlackSnapCycleTitle} alt="SnapCycle Title" className='NavbarTitle' />
          </div>
          <div className='NavbarPages'>
            {PagesInfo.PagesInfo.map((page, index) => (
              <NavbarPageItem pageName={page.name} key={index} />
            ))}
          </div>
          <div className='NavbarRightContainer'>
            <div className='NavbarButtonContainer'>
              <OutlineButton title="Try Now" destination="/demo"/>
            </div>
            <img src={HamburgerIcon} alt="Hamburger Icon" className='HamburgerIcon' id={showPartialBackground ? 'HamburgerIconGray' : 'HamburgerIconWhite'} onClick={() => updateHamburgerMenu()}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavbarPageItem = ({ pageName }) => {
  const destination = "/" + pageName.toLowerCase();
  const location = useLocation();
  const navigate = useNavigate();
  const goToLocation = (location) => {
    navigate(location);
  };

  return (
    <div
      className={location.pathname === destination ? "NavbarPagesActive" : "NavbarPagesInactive"}
      onClick={() => goToLocation(destination)}
    >
      {pageName}
    </div>
  );
};

const HamburgerMenu = ({showHamburgerMenu, updateHamburgerMenu}) => {

  return (
      <div className='HamburgerMenuContainer' id={showHamburgerMenu ? 'HamburgerMenuActive' : 'HamburgerMenuInactive'} onClick={() => updateHamburgerMenu()}>
        <div className='HamburgerMenu'>
          <div className='BurgerTopContainer'>
            <div className='BurgerLogoAndName'>
              <img src={WhiteLogo} alt="SnapCycle Logo" className="NavbarLogo" />
              <img src={WhiteSnapCycleTitle} alt="SnapCycle Title" className='NavbarTitle' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar;
