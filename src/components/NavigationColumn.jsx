import {useNavigate} from "react-router-dom";
import React from "react";
import '../styles/components/NavigationColumn.css';

const NavigationColumn = ({info, columnName}) => {
    const navigate = useNavigate();
    const goToLocation = (location) => {
        if (location === "") {return;}
        navigate(location);
        window.scrollTo(0,0);
    }

    return (
        <div className='FooterInfoColumnContainer'>
            <div className='FooterColumnTitle'>{columnName}</div>
            {info.map((item, index) => (
                <div className='FooterItem' key={index} onClick={() => goToLocation(item.destination)}>{item.name}</div>
            ))}
        </div>
    )
}

export default NavigationColumn;


