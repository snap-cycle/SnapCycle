import React from 'react';
import '../styles/Footer.css';
import WhiteLogo from "../assets/branding/WhiteLogo.png";
import GithubLogo from "../assets/socialMediaIcons/github.svg";
import LinkedinLogo from "../assets/socialMediaIcons/linkedin.svg";
import TwitterLogo from "../assets/socialMediaIcons/twitter.svg";
import YoutubeLogo from "../assets/socialMediaIcons/youtube.svg";
import FacebookLogo from "../assets/socialMediaIcons/facebook.svg";
import {useNavigate} from "react-router-dom";

const Footer = ({pages}) => {

    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    console.log(pages)

    return (
        <div>
            <div className='MainFooter'>
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
                    <a href="https://github.com/luaibash/SnapCycle" target="blank">
                        <img src={GithubLogo} alt="Github Logo" className='SocialMediaLogo' />
                    </a>
                        <img src={LinkedinLogo} alt="Linkedin Logo" className='SocialMediaLogo' />
                        <img src={TwitterLogo} alt="Twitter Logo" className='SocialMediaLogo' />
                        <img src={YoutubeLogo} alt="Youtube Logo" className='SocialMediaLogo' />
                        <img src={FacebookLogo} alt="Facebook Logo" className='SocialMediaLogo' />
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
            {/*<div className='BottomFooter'>*/}
            {/*    SnapCycle 2023.*/}
            {/*</div>*/}
        </div>
    )
}

export default Footer;