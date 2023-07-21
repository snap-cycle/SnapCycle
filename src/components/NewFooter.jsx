import React from 'react';
import '../styles/NewFooter.css';
import WhiteLogo from "../assets/branding/WhiteLogo.png";
import GithubLogo from "../assets/socialMediaIcons/github.svg";
import LinkedinLogo from "../assets/socialMediaIcons/linkedin.svg";
import TwitterLogo from "../assets/socialMediaIcons/twitter.svg";
import YoutubeLogo from "../assets/socialMediaIcons/youtube.svg";
import FacebookLogo from "../assets/socialMediaIcons/facebook.svg";

const NewFooter = ({pages}) => {


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
                        <img src={GithubLogo} alt="Github Logo" className='SocialMediaLogo' />
                        <img src={LinkedinLogo} alt="Linkedin Logo" className='SocialMediaLogo' />
                        <img src={TwitterLogo} alt="Twitter Logo" className='SocialMediaLogo' />
                        <img src={YoutubeLogo} alt="Youtube Logo" className='SocialMediaLogo' />
                        <img src={FacebookLogo} alt="Facebook Logo" className='SocialMediaLogo' />
                    </div>
                </div>
                <div className='ProductSection'>

                </div>
                <div className='HelpSection'>

                </div>
                <div className='CompanySection'>

                </div>
            </div>
            <div className='BottomFooter'>
                SnapCycle 2023.
            </div>
        </div>
    )
}

export default NewFooter;