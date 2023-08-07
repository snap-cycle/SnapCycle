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
    const [productMenu, setProductMenu] = useState(false);
    const [helpMenu, setHelpMenu] = useState(false);
    const [companyMenu, setCompanyMenu] = useState(false);


    return (
        <div className='FooterInfo'>
            <MenuFooterInfoItem menu={productMenu} setMenu={setProductMenu} info={FooterInfo.product} name={"Product"}/>
            <MenuFooterInfoItem menu={helpMenu} setMenu={setHelpMenu} info={FooterInfo.help} name={"Help Center"}/>
            <MenuFooterInfoItem menu={companyMenu} setMenu={setCompanyMenu} info={PagesInfo.PagesInfo} name={"Company"}/>
        </div>
    )
}

const MenuFooterInfoItem = ({info, name, menu, setMenu}) => {
    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }
    const toggleMenu = ([menu, setMenu]) => {
        setMenu(!menu);
    }

    return (
        <div className='ProductContainer'>
            <div className='FooterColumnTitle' onClick={() => toggleMenu([menu, setMenu])}>
                {name}
                <img src={Arrow} alt="arrow" className={menu ? "FooterArrowActive" : "FooterArrowInactive"}/>
            </div>
            <div className="ProductItemContainer" id={menu ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                {info.map((item, index) => (
                    <div className='FooterItem' key={index} onClick={() => goToLocation(item.destination)}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Footer;