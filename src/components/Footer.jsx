import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {FooterInfo} from "../Info/FooterInfo";
import '../styles/components/Footer.css';
import WhiteLogo from "../assets/Branding/WhiteLogo.png";
import WhiteTitle from "../assets/Title/TitleWhite.png";
import Arrow from "../assets/Footer/RightArrow.svg";
import * as PagesInfo from "../Info/PagesInfo";

const Footer = () => {

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
            <div className='Footer'>
                <div className='FooterLeft'>
                    <div className='FooterLogoTitleContainer'>
                        <img src={WhiteLogo} alt="SnapCycle Logo" className="FooterLogo"/>
                        <img src={WhiteTitle} alt="White Title" className='FooterSnapCycleTitle' />
                    </div>
                    <div className='FooterSlogan'>{FooterInfo.slogan}</div>
                    <div className='SocialMedia'>
                        {FooterInfo.socialMedia.map((item) => (
                                item.link === ""
                                ?
                                    <img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo' />
                                :
                                    <a href={item.link} target="_blank" rel="noreferrer"><img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo'/></a>
                            ))}
                    </div>
                </div>
                {(windowWidth > breakpoint) ? <ColumnFooterInfo pages={PagesInfo.pages}/> : <MenuFooterInfo pages={PagesInfo.pages}/>}
            </div>
            <div className='BottomFooter'>
                {FooterInfo.credits}
            </div>
        </div>
    )
}

const ColumnFooterInfo = () => {

    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className='FooterInfo'>
            <div className='ProductContainer'>
                <div className='FooterColumnTitle'>Product</div>
                {FooterInfo.product.map((item) => (<div className='FooterItem'>{item.name}</div>))}
            </div>
            <div className='HelpCenterContainer'>
                <div className='FooterColumnTitle'>Help Center</div>
                {FooterInfo.help.map((item) => (<div className='FooterItem'>{item.name}</div>))}
            </div>
            <div className='CompanyContainer'>
                <div className='FooterColumnTitle'>Company</div>
                {PagesInfo.pages.map((page, index) => (<div className='FooterItem' key={index} onClick={() => goToLocation(page.toLowerCase())}>{page}</div>))}
            </div>
        </div>
    )
}

const MenuFooterInfo = () => {

    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    const [ProductMenu, SetProductMenu] = useState(false);
    const [HelpMenu, SetHelpMenu] = useState(false);
    const [CompanyMenu, SetCompanyMenu] = useState(false);
    const toggleProductMenu = () => {
        SetProductMenu(!ProductMenu);
    };
    const toggleHelpMenu = () => {
        SetHelpMenu(!HelpMenu);
    };
    const toggleCompanyMenu = () => {
        SetCompanyMenu(!CompanyMenu);
    };

    return (
        <div className='FooterInfo'>
            <div className='ProductContainer'>
                <div className='FooterColumnTitle' onClick={() => toggleProductMenu()}>
                    Product
                    <img src={Arrow} alt="arrow" className={ProductMenu ? "FooterArrowActive" : "FooterArrowInactive"}/>
                </div>
                <div className="ProductItemContainer" id={ProductMenu ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                    {FooterInfo.product.map((item) => (<div className='FooterItem'>{item.name}</div>))}
                </div>
            </div>
            <div className='HelpCenterContainer'>
                <div className='FooterColumnTitle' onClick={() => toggleHelpMenu()}>
                    Help Center
                    <img src={Arrow} alt="arrow" className={HelpMenu ? "FooterArrowActive" : "FooterArrowInactive"}/>
                </div>
                <div className="HelpItemContainer" id={HelpMenu ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                    {FooterInfo.help.map((item) => (<div className='FooterItem'>{item.name}</div>))}
                </div>
            </div>
            <div className='CompanyContainer'>
                <div className='FooterColumnTitle' onClick={() => toggleCompanyMenu()}>
                    Company
                    <img src={Arrow} alt="arrow" className={CompanyMenu ? "FooterArrowActive" : "FooterArrowInactive"}/>
                </div>
                <div className="CompanyItemContainer" id={CompanyMenu ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                    {PagesInfo.pages.map((page, index) => (<div className='FooterItem' key={index} onClick={() => goToLocation(page.toLowerCase())}>{page}</div>))}
                </div>
            </div>
        </div>
    )
}



export default Footer;