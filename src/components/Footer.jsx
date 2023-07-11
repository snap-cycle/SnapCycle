import React from 'react';
import '../styles/Footer.css';
import {useLocation, useNavigate} from "react-router-dom";
import CreditsTag from "../components/CreditsTag";
import WhiteLogo from "../assets/branding/WhiteLogo.png";
const Footer = () => {


    return (
        <div className="footer">
            <div className="col">
                <div className="col-title">SnapCycle</div>
                <div className="text-footer-item">Saving the turtles one snap at a time</div>
                {/*<img className="h-32" src={WhiteLogo} alt="Logo"></img>*/}
            </div>
            <div className="col">
                <div className="col-title">Pages</div>
                <FooterPageItem name="Home" destination="/"/>
                <FooterPageItem name="Team" destination="/team"/>
                <FooterPageItem name="Demo" destination="/demo"/>
            </div>
            <div className="col">
                <div className="col-title">Other</div>
                <FooterExternalLink name="Devpost" destination="https://devpost.com/software/snapcycle-hyx3qv"/>
                <FooterExternalLink name="GitHub" destination="https://github.com/luaibash/SnapCycle"/>
            </div>
            <CreditsTag names="Aidan Froggatt and Luai Bashar"/>
        </div>
    )
}

const FooterPageItem = ({name, destination}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (destination) => {
        navigate(destination);
        window.location.reload();
    };

    return (
        <div className="col-item-container">
            <div className={location.pathname === destination ? "col-item active" : "col-item"} onClick={() => handleClick(destination)}>
                {name}
            </div>
        </div>
    )
}

const FooterExternalLink = ({name, destination}) => {
    return (
        <div className="col-item">
            <a href={destination} target="_blank">
                {name}
            </a>
        </div>
    )
}

export default Footer;