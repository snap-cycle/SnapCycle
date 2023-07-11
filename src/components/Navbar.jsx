import React from 'react';
import BlackLogo from "../assets/branding/BlackLogo.png";
import '../styles/Navbar.css';
import {useLocation, useNavigate} from "react-router-dom";
import OutlineButton from "./OutlineButton";


const Navbar = ({Pages}) => {
    const location = useLocation();
    let navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className="Navbar">
            <div className="NavbarLogo">
                <img src={BlackLogo} alt="SnapCycle Logo" className="NavbarLogoImage" onClick={() => goToLocation("/")}/>
                SnapCycle
            </div>
            <div className="NavbarPagesContainer">
                {
                    Pages.map((page) =>
                        <div className={location.pathname === "/" + page ? "NavbarPagesActive" : "NavbarPages"}
                             onClick={() => goToLocation("/" + page)}>
                            {page}
                        </div>
                    )
                }
            </div>
            <div className="NavbarAdditionalContainer">
                <OutlineButton title="Demo" destination="/demo"/>
            </div>
        </div>
    );
}

export default Navbar;