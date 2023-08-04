import React from 'react';
import '../styles/Footer.css';
import WhiteLogo from "../assets/Branding/WhiteLogo.png";

import {useNavigate} from "react-router-dom";
import {SocialMediaData} from "../data/SocialMedia";

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
                        <div className='SnapcycleTitle'>
                            SnapCycle
                        </div>
                    </div>
                    <div className='ProjectSlogan'>
                        Saving the turtles one snap at a time.
                    </div>
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
                        <div className='ProductTitle'>
                            Product
                        </div>
                        <div className='TryNow'>
                            Try Now
                        </div>
                        <div className='Features'>
                            Features
                        </div>
                        <div className='Resources'>
                            Resources
                        </div>
                        <div className='Security'>
                            Security
                        </div>
                    </div>
                    <div className='HelpSection'>
                        <div className='HelpTitle'>
                            Help Center
                        </div>
                        <div className='FAQ'>
                            FAQ
                        </div>
                        <div className='Contact'>
                            Contact Us
                        </div>
                    </div>
                    <div className='CompanySection'>
                        <div className='CompanyTitle'>
                            Company
                        </div>
                        {
                            pages.map((page, index) =>
                                <div className='FooterItem' key={index} onClick={() => goToLocation(page.toLowerCase())}>
                                    {page}
                                </div>
                            )
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