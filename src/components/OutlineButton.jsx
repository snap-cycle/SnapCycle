import React from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/components/OutlineButton.css';

const OutlineButton = ({title, destination}) => {
    let navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
        window.scrollTo(0,0);
    }

    return (
        <div className="OutlineButton" onClick={() => goToLocation(destination)}>
            {title}
            <span className="arrow"></span>
        </div>
    );
}

export default OutlineButton;
