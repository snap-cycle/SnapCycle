import React, {useEffect, useState} from 'react';
import {FooterInfo} from "../Info/FooterInfo";
import '../styles/components/Footer.css';
import WhiteLogo from "../assets/Branding/WhiteLogo.png";
import WhiteTitle from "../assets/Title/TitleWhite.png";
import * as PagesInfo from "../Info/PagesInfo";
import NavigationColumn from "./NavigationColumn";
import ArrowNavigationMenu from "./ArrowNavigationMenu";

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
                        {FooterInfo.socialMedia.map((item, index) => (
                                item.destination === ""
                                ?
                                    <img src={item.imageSrc} key={index} alt={item.imageAlt} className='SocialMediaLogo' />
                                :
                                    <a href={item.destination} target="_blank" rel="noreferrer" key={index}><img src={item.imageSrc} alt={item.imageAlt} className='SocialMediaLogo'/></a>
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
    console.log(FooterInfo.columns)

    return (
        <div className='FooterInfo'>
            <NavigationColumn info={FooterInfo.product} columnName={"Product"}/>
            <NavigationColumn info={FooterInfo.help} columnName={"Help Center"}/>
            <NavigationColumn info={PagesInfo.PagesInfo} columnName={"Company"}/>
        </div>
    )
}

const MenuFooterInfo = () => {
    const [productMenu, setProductMenu] = useState(false);
    const [helpMenu, setHelpMenu] = useState(false);
    const [companyMenu, setCompanyMenu] = useState(false);


    return (
        <div className='FooterInfo'>
            <ArrowNavigationMenu menu={productMenu} setMenu={setProductMenu} info={FooterInfo.product} columnName={"Product"}/>
            <ArrowNavigationMenu menu={helpMenu} setMenu={setHelpMenu} info={FooterInfo.help} columnName={"Help Center"}/>
            <ArrowNavigationMenu menu={companyMenu} setMenu={setCompanyMenu} info={PagesInfo.PagesInfo} columnName={"Company"}/>
        </div>
    )
}


export default Footer;