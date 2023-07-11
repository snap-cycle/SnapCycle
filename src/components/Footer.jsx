import React from 'react';
import '../styles/Footer.css';
import {useLocation, useNavigate} from "react-router-dom";

const Footer = () => {


    return (
        <div className="footer">
            <div className="col">
                <h3>SnapCycle</h3>
            </div>
            <div className="col">
                <h3>Pages</h3>
                <FooterPageItem name="Home" destination="/home/"/>
                <FooterPageItem name="Database" destination="/database/"/>
                <FooterPageItem name="EIDP" destination="/eidp/"/>
                <FooterPageItem name="Data Analysis" destination="/data_analysis/"/>
                <FooterPageItem name="Equipment Verification" destination="/equipment_verification/"/>
                <FooterPageItem name="Data Entry" destination="/data_entry/"/>
                <FooterPageItem name="More Info" destination="/more_info/"/>
            </div>
            <div className="col">
                <h3>Other</h3>
                <FooterExternalLink name="Company" destination="https://www.samuel.com/burloak-technologies"/>
                <FooterExternalLink name="Samuel Start" destination="https://samuel.service-now.com/start"/>
            </div>
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
        <div className={location.pathname === destination ? "col-item active" : "col-item"} onClick={() => handleClick(destination)}>
            {name}
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