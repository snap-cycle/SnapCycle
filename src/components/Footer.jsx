import React from 'react';
import '../styles/Footer.css';
import {useLocation, useNavigate} from "react-router-dom";
import CreditsTag from "../components/CreditsTag";

const Footer = ({pages}) => {


    return (
        <div className="footer">
            <div className="footer-left">
                <div className="col">
                    <div className="col-title">About</div>
                    <div className="text-footer-item">
                        Saving the turtles one snap at a time...<br/>
                        sample text...<br/>
                        more words...<br/>
                        nice!
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="col">
                    <div className="col-title">Website</div>
                    {
                        pages.map((page) =>
                            <FooterPageItem name={page} destination={"/" + page}/>
                        )
                    }
                </div>
                <div className="col">
                    <div className="col-title">SnapCycle</div>
                    <FooterExternalLink name="Placeholder"/>
                </div>
                <div className="col">
                    <div className="col-title">More</div>
                    <FooterExternalLink name="Devpost" destination="https://devpost.com/software/snapcycle-hyx3qv"/>
                    <FooterExternalLink name="GitHub" destination="https://github.com/luaibash/SnapCycle"/>
                </div>
                <div className="col">
                    <div className="vertical-title">SnapCycle</div>
                </div>
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
            <a href={destination} target="_blank" rel="noreferrer">
                {name}
            </a>
        </div>
    )
}

export default Footer;