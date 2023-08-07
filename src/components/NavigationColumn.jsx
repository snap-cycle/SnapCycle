import {useNavigate} from "react-router-dom";
import React from "react";
import '../styles/components/Footer.css';

const NavigationColumn = ({info, name}) => {
    const navigate = useNavigate();
    const goToLocation = (location) => {
        if (location === "") {return;}
        navigate(location);
    }

    return (
        <div className='FooterInfoColumnContainer'>
            <div className='FooterColumnTitle'>{name}</div>
            {info.map((item, index) => (
                <div className='FooterItem' key={index} onClick={() => goToLocation(item.destination)}>{item.name}</div>
            ))}
        </div>
    )
}

export default NavigationColumn;
