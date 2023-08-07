import {useNavigate} from "react-router-dom";
import Arrow from "../assets/Footer/RightArrow.svg";
import React from "react";
import '../styles/components/Footer.css';

const ArrowNavigationMenu = ({info, name, menu, setMenu}) => {
    const navigate = useNavigate();
    const goToLocation = (location) => {
        if (location === "") {return;}
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
                    <div className='FooterItem' key={index} onClick={() => goToLocation(item.destination)}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default ArrowNavigationMenu;
