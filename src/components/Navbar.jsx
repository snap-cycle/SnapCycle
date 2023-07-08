import React from 'react';
import BlackLogo from "../assets/branding/BlackLogo.png";
import '../styles/Navbar.css';
import {useNavigate, useLocation} from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    const goToDemo = () => {
        navigate("/demo");
    }
    const goToTeam = () => {
        navigate("/team");
    }

    const location = useLocation();

    return (
        <div className="Navbar">
            <div className="NavbarLeft">
                <img src={BlackLogo} alt="Black Logo"/>
                SnapCycle
            </div>
            <div className="NavbarRight">
                <div className="NavbarItem" onClick={goToHome}>Home</div>
                <div className="NavbarItem" onClick={goToDemo}>Demo</div>
                <div className="NavbarItem" onClick={goToTeam}>Team</div>
            </div>
        </div>
    );
}

export default Navbar;