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

    return (
        <div className='FooterContainer'>
            {(windowWidth > breakpoint) ? <LargeFooter pages={pages}/> : <SmallFooter pages={pages}/>}
            <div className='BottomFooter'>
                {FooterInfo.credits}
            </div>
        </div>
    )
}

const LargeFooter = ({pages}) => {

    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
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
                <div className='ProductContainer'>
                    <div className='FooterColumnTitle'>Product</div>
                    {FooterInfo.product.map((item) => (<div className='FooterItem'>{item.name}</div>))}
                </div>
                <div>
                    <div className='FooterColumnTitle'>Help Center</div>
                    {FooterInfo.help.map((item) => (<div className='FooterItem'>{item.name}</div>))}
                </div>
                <div>
                    <div className='FooterColumnTitle'>
                        Company
                    </div>
                    {pages.map((page, index) => (<div className='FooterItem' key={index} onClick={() => goToLocation(page.toLowerCase())}>{page}</div>))}
                </div>
            </div>
        </div>
    )
}

const SmallFooter = ({pages}) => {
    return (
        <div className='Footer'>

        </div>
    )
}



export default Footer;