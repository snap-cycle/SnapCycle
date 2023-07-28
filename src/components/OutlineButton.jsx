import React from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/OutlineButton.css';

const OutlineButton = ({title, destination}) => {
    let navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className="OutlineButton" onClick={() => goToLocation(destination)}>
            {title}
            <span class="arrow"></span>
        </div>
    );
}

export default OutlineButton;