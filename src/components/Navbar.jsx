import React from 'react';
import BlackLogo from "../assets/branding/BlackLogo.png";
import '../styles/Navbar.css';
import {useLocation, useNavigate} from "react-router-dom";
import OutlineButton from "./OutlineButton";

const Navbar = () => {
    let navigate = useNavigate();

    const goToLocation = (location) => {
        navigate(location);
    }

    const location = useLocation();
    console.log(location.pathname)

    return (
        <div className="Navbar">
            <div className="NavbarLogo">
                <img src={BlackLogo} alt="SnapCycle Logo" className="NavbarLogoImage" onClick={() => goToLocation("/")}/>
                SnapCycle
            </div>
            <div className="NavbarPagesContainer">
                <div className={location.pathname === "/" ? "NavbarPagesActive" : "NavbarPages"} onClick={() => goToLocation("/")}>Home</div>
                <div className={location.pathname === "/team" ? "NavbarPagesActive" : "NavbarPages"} onClick={() => goToLocation("/team")}>Team</div>
            </div>
            <div className="NavbarAdditionalContainer">
                <OutlineButton title="Demo" destination="/demo"/>
            </div>
        </div>
    );
}

export default Navbar;