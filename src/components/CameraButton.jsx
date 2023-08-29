import React from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/CameraButton.css';

const CameraButton = () => {

    return (
        <div className='CameraButtonContainer'>
            <div className="CameraButton">
                Enable Camera
                <span className="arrow"></span>
            </div>
        </div>
    );
}

export default CameraButton;
