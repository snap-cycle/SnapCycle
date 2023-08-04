import React from 'react';
import '../styles/Footer.css';
import WhiteLogo from "../assets/Branding/WhiteLogo.png";

import {useNavigate} from "react-router-dom";
import {FooterInfo} from "../Info/FooterInfo";

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
                    <div className='ProjectSlogan'>{FooterInfo.slogan}</div>
                    <div className='SocialMedia'>
                        {FooterInfo.socialMedia.map((item) => (
                                item.link === ""
                                ?
                                    <img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo' />
                                :
                                    <a href={item.link} target="_blank"><img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo'/></a>
                            ))}
                    </div>
                </div>
                <div className='FooterInfo'>
                    <div>
                        <div className='footer-column-title'>Product</div>
                        {FooterInfo.product.map((item) => (<div className='footer-item'>{item.name}</div>))}
                    </div>
                    <div>
                        <div className='footer-column-title'>Help Center</div>
                        {FooterInfo.help.map((item) => (<div className='footer-item'>{item.name}</div>))}
                    </div>
                    <div>
                        <div className='footer-column-title'>
                            Company
                        </div>
                        {pages.map((page, index) => (<div className='footer-item' key={index} onClick={() => goToLocation(page.toLowerCase())}>{page}</div>))}
                    </div>
                </div>
            </div>
            <div className='BottomFooter'>
                {FooterInfo.credits}
            </div>
        </div>
    )
}

export default Footer;