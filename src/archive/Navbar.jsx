import React from 'react';
import BlackLogo from "../assets/Branding/BlackLogo.png";
import '../styles/Navbar.css';
import {useLocation, useNavigate} from "react-router-dom";
import OutlineButton from "./OutlineButton";
import SlideIn from "../animations/SlideIn";

const Navbar = ({pages}) => {

    return (
        <SlideIn vertical={true}>
            <div className="Navbar">
                <div className="NavbarLogo">
                    <img src={BlackLogo} alt="SnapCycle Logo" className="NavbarLogoImage"/>
                    SnapCycle
                </div>
                <div className="NavbarPagesContainer">
                    {
                        pages.map((page) =>
                            <NavbarPageItem page={page}/>
                        )
                    }
                </div>
                <div className="NavbarAdditionalContainer">
                    <OutlineButton title="Try Now" destination="/demo"/>
                </div>
            </div>
        </SlideIn>
    );
}

const NavbarPageItem = ({page}) => {
    const destination = "/" + page.toLowerCase();
    const location = useLocation();
    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className={location.pathname === destination ? "NavbarPagesActive" : "NavbarPages"}
             onClick={() => goToLocation(destination)}>
            {page}
        </div>
    );
}

export default Navbar;