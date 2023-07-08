import React from 'react';
import BlackLogo from "../assets/branding/BlackLogo.png";
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className="Navbar">
            <div className="NavbarLeft">
                <img src={BlackLogo} alt="Black Logo"/>
                SnapCycle
            </div>
            <div className="NavbarRight">
                <div className="NavbarItem" onClick={() => goToLocation("/")}>Home</div>
                <div className="NavbarItem" onClick={() => goToLocation("/demo")}>Demo</div>
                <div className="NavbarItem" onClick={() => goToLocation("/team")}>Team</div>
            </div>
        </div>
    );
}

export default Navbar;