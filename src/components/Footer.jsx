import React from 'react';
import '../styles/Footer.css';
import WhiteLogo from "../assets/Branding/WhiteLogo.png";

import {useNavigate} from "react-router-dom";
import {SocialMediaData} from "../Info/SocialMediaInfo";
import {FooterHelpInfo} from "../Info/FooterHelpInfo";
import {FooterProductInfo} from "../Info/FooterProductInfo";

const Footer = ({pages}) => {

    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className='FooterContainer'>
            <div className='Footer'>
                <div className='FooterLeft'>
                    <div className='FooterLogoName'>
                        <img src={WhiteLogo} alt="SnapCycle Logo" className="FooterLogoImage"/>
                        <div className='SnapcycleTitle'>SnapCycle</div>
                    </div>
                    <div className='ProjectSlogan'>Saving the turtles one snap at a time.</div>
                    <div className='SocialMedia'>
                        {
                            SocialMediaData.map((item) => (
                                item.link === ""
                                ?
                                    <img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo' />
                                :
                                    <a href={item.link} target="_blank">
                                        <img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo' />
                                    </a>
                            ))
                        }
                    </div>
                </div>
                <div className='FooterInfo'>
                    <div className='ProductSection'>
                        <div className='ProductTitle'>Product</div>
                        {
                            FooterProductInfo.map((item) => (
                                <div className='footer-item'>{item.name}</div>
                            ))
                        }
                    </div>
                    <div className='HelpSection'>
                        <div className='HelpTitle'>Help Center</div>
                        {
                            FooterHelpInfo.map((item) => (
                                <div className='footer-item'>{item.name}</div>
                            ))
                        }
                    </div>
                    <div className='CompanySection'>
                        <div className='CompanyTitle'>
                            Company
                        </div>
                        {
                            pages.map((page, index) => (
                                <div className='footer-item' key={index} onClick={() => goToLocation(page.toLowerCase())}>
                                    {page}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='BottomFooter'>
               Developed by Luai Bashar and Aidan Froggatt.
            </div>
        </div>
    )
}

export default Footer;