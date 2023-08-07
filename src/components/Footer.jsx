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
                                item.destination === ""
                                ?
                                    <img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo' />
                                :
                                    <a href={item.destination} target="_blank" rel="noreferrer"><img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo'/></a>
                            ))}
                    </div>
                </div>
                {(windowWidth > breakpoint) ? <ColumnFooterInfo/> : <MenuFooterInfo/>}
            </div>
            <div className='BottomFooter'>
                {FooterInfo.credits}
            </div>
        </div>
    )
}

const ColumnFooterInfo = () => {
    return (
        <div className='FooterInfo'>
            <ColumnFooterInfoItem info={FooterInfo.product} name={"Product"}/>
            <ColumnFooterInfoItem info={FooterInfo.help} name={"Help Center"}/>
            <ColumnFooterInfoItem info={PagesInfo.PagesInfo} name={"Company"}/>
        </div>
    )
}

const ColumnFooterInfoItem = ({info, name}) => {
    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className='FooterInfoColumnContainer'>
            <div className='FooterColumnTitle'>
                {name}
            </div>
            {
                info.map((item) => (
                    <div className='FooterItem' onClick={() => goToLocation(item.destination)}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}

const MenuFooterInfo = () => {

    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    const [prodcutMenu, setProductMenu] = useState(false);
    const [helpMenu, setHelpMenu] = useState(false);
    const [companyMenu, setCompanyMenu] = useState(false);

    const toggleMenu = ([menu, setMenu]) => {
        setMenu(!menu);
    }

    return (
        <div className='FooterInfo'>
            <div className='ProductContainer'>
                <div className='FooterColumnTitle' onClick={() => toggleMenu([prodcutMenu, setProductMenu])}>
                    Product
                    <img src={Arrow} alt="arrow" className={prodcutMenu ? "FooterArrowActive" : "FooterArrowInactive"}/>
                </div>
                <div className="ProductItemContainer" id={prodcutMenu ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                    {FooterInfo.product.map((item) => (
                        <div className='FooterItem'>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='HelpCenterContainer'>
                <div className='FooterColumnTitle' onClick={() => toggleMenu([helpMenu, setHelpMenu])}>
                    Help Center
                    <img src={Arrow} alt="arrow" className={helpMenu ? "FooterArrowActive" : "FooterArrowInactive"}/>
                </div>
                <div className="HelpItemContainer" id={helpMenu ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                    {FooterInfo.help.map((item) => (
                        <div className='FooterItem'>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='CompanyContainer'>
                <div className='FooterColumnTitle' onClick={() => toggleMenu([companyMenu, setCompanyMenu])}>
                    Company
                    <img src={Arrow} alt="arrow" className={companyMenu ? "FooterArrowActive" : "FooterArrowInactive"}/>
                </div>
                <div className="CompanyItemContainer" id={companyMenu ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                    {PagesInfo.PagesInfo.map((page, index) => (
                        <div className='FooterItem' key={index} onClick={() => goToLocation(page.destination)}>
                            {page.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default Footer;