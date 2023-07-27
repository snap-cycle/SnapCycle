import React from 'react';
import BlackLogo from "../assets/branding/BlackLogo.png";
import SnapCycleTitle from "../assets/NavBar/SnapCycleTitle.png";
import "../styles/NavBar.css";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = ({pages}) => {

    return (
        <div className='NavBar'>
            <div className='NavBarLogoAndName'>
                <img src={BlackLogo} alt="SnapCycle Logo" className="NavBarLogo"/>
                <img src={SnapCycleTitle} alt="SnapCycle Title" className='NavBarTitle' />
            </div>
            <div className='NavBarPages'>
                {
                    pages.map((page) =>
                        <NavbarPageItem page={page}/>
                    )
                }
            </div>
            <button class="NavBarButton">
                Try Now
                <span class="arrow"></span>
            </button>
        </div>
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
        <div className={location.pathname === destination ? "NavbarPagesActive" : "NavbarPagesInactive"}
             onClick={() => goToLocation(destination)}>
            {page}
        </div>
    );
}

export default Navbar;