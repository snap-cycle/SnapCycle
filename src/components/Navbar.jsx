import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import BlackLogo from "../assets/Branding/BlackLogo.png";
import WhiteLogo from "../assets/Branding/WhiteLogo.png";
import BlackSnapCycleTitle from "../assets/Title/TitleBlack.png";
import WhiteSnapCycleTitle from "../assets/Title/TitleWhite.png";
import HamburgerIcon from "../assets/NavBar/HamburgerMenu.svg";
import WhiteX from "../assets/NavBar/WhiteX.svg";
import RightArrow from "../assets/Footer/RightArrow.svg";
import OutlineButton from "./OutlineButton";
import AnimatedPage from "../animations/AnimatedPage";
import "../styles/Navbar/Navbar.css";
import "../styles/Navbar/HamburgerMenu.css";
import * as PagesInfo from "../Info/PagesInfo";

const Navbar = () => {
    const [showHamburgerMenu, setHamburgerMenu] = useState(false);

    const updateHamburgerMenu = () => {
        setHamburgerMenu(showHamburgerMenu => !showHamburgerMenu);

        SwitchScrollBar();
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

    // Switches scrollbars whenever hamburger menu is opened or closed
    const SwitchScrollBar = () => {
        if (showHamburgerMenu) {
            document.body.style.overflow = 'auto';
            document.querySelector('#HamburgerMenuActive').style.overflow = 'hidden';
        }
        else {
            setTimeout(() => {
                document.body.style.overflow = 'hidden';
                document.querySelector('#HamburgerMenuActive').style.overflow = 'auto';
            }, 500 );
        }
    };

    return (
        <AnimatedPage y={0} duration={0} delay={0.1}>
            <ActiveNavbar updateHamburgerMenu={updateHamburgerMenu}/>
            <HamburgerMenu showHamburgerMenu={showHamburgerMenu} updateHamburgerMenu={updateHamburgerMenu}/>
        </AnimatedPage>
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

    // Chooses navbar style based on conditions
    var NavbarId; const location = useLocation();
    if (location.pathname !== '/') NavbarId = "NavbarSolid";
    else if (showNavBar) {
        if (showSolidBackground) NavbarId = "NavbarSolid";
        else if (showPartialBackground) NavbarId = "NavbarPartial";
        else NavbarId = "NavbarTransparent";
    }
    else NavbarId = "NavbarDissapear";

    return (
        <div className='NavbarContainer'>
            <div className='ActiveNavbarContainer' id={NavbarId}>
                <div className="ActiveNavbar">
                    <div className='NavbarLogoAndName'>
                        <img src={BlackLogo} alt="SnapCycle Logo" className="NavbarLogo" />
                        <img src={BlackSnapCycleTitle} alt="SnapCycle Title" className='NavbarTitle' />
                    </div>
                    <div className='NavbarPages'>
                        {PagesInfo.PagesInfo.map((page, index) => (
                            <NavbarPageItem pageName={page.name} destination={page.destination} key={index} />
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

const NavbarPageItem = ({ pageName, destination }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
        window.scrollTo(0,0);
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
        <div className='HamburgerMenuContainer' id={showHamburgerMenu ? 'HamburgerMenuActive' : 'HamburgerMenuInactive'}>
            <div className='HamburgerMenu'>
                <div className='BurgerTopContainer' id={ showHamburgerMenu ? 'BurgerTopContainerActive' : 'BurgerTopContainerInactive'}>
                    <div className='BurgerLogoAndName'>
                        <img src={WhiteLogo} alt="SnapCycle Logo" className="HamburgerLogo"/>
                        <div className='BurgerTitleContainer'>
                            <img src={WhiteSnapCycleTitle} alt="SnapCycle Title" className='HamburgerTitle'/>
                            <div className='cover' id={showHamburgerMenu && 'LogoActive'}></div>
                        </div>
                    </div>
                    <img src={WhiteX} alt="Close Button" className='WhiteX' onClick={() => updateHamburgerMenu()}/>
                </div>
                <div className='HamburgerPages'>
                    <HamburgerPage show={showHamburgerMenu} text={'Home'} page={0} destination="/" hamburgerMenu={showHamburgerMenu} setHamburgerMenu={updateHamburgerMenu}/>
                    <HamburgerPage show={showHamburgerMenu} text={'Try Now'} page={1} destination="/demo" hamburgerMenu={showHamburgerMenu} setHamburgerMenu={updateHamburgerMenu}/>
                    <HamburgerPage show={showHamburgerMenu} text={'Team'} page={2} destination="/team" hamburgerMenu={showHamburgerMenu} setHamburgerMenu={updateHamburgerMenu}/>
                    <HamburgerPage show={showHamburgerMenu} text={'FAQ'} page={3} destination="/faq" hamburgerMenu={showHamburgerMenu} setHamburgerMenu={updateHamburgerMenu}/>
                    <HamburgerPage show={showHamburgerMenu} text={'Contact Us'} page={5} destination="/contact" hamburgerMenu={showHamburgerMenu} setHamburgerMenu={updateHamburgerMenu}/>
                </div>
            </div>
        </div>
    );
};

const HamburgerPage = ({show, text, page, destination, hamburgerMenu, setHamburgerMenu}) => {
    const maxPage = 5; const interval = 0.05; const maxTime = maxPage*interval;
    const delay = (show) ? (0.5 + page*interval) : (maxTime - page*interval);
    const pageStyle = {
        transition: `padding-left 0.5s, color 0.5s, opacity 0.2s ease-out ${delay}s, margin-top 0.2s ease-out ${delay}s`,
    };

    const navigate = useNavigate();

    const goToLocation = (location) => {
        navigate(location);
        window.scrollTo(0,0);
        setHamburgerMenu(showHamburgerMenu => !showHamburgerMenu);
    }

    return (
        <div
            className='HamburgerPage'
            id={show ? 'HamburgerPageActive' : 'HamburgerPageInactive'}
            style={pageStyle}
            onClick={() => goToLocation(destination)}
        >
            {text}
            <img src={RightArrow} alt="Arrow" className='HamburgerArrow'/>
        </div>
    );
};

export default Navbar;
