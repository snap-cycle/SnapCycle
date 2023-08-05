import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {FooterInfo} from "../Info/FooterInfo";
import '../styles/components/Footer.css';
import WhiteLogo from "../assets/Branding/WhiteLogo.png";

const Footer = ({pages}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 1000;
    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth >= breakpoint) return (<LargeFooter pages={pages} />);
    else return (<SmallFooter pages={pages} />);
}

const LargeFooter = ({pages}) => {

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

const SmallFooter = ({}) => {
    return (
        <div>

        </div>
    )
}



export default Footer;