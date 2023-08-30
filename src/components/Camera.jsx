import {React, useState} from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';
import Webcam from "react-webcam";

const Camera = () => {
    const [cameraOn, setCameraOn] = useState(false);

    const toggleCamera = () => {
        setCameraOn(true);
        document.querySelector('.CameraButton').style.display = 'none';
    }; 

    return (
        <div>
            <div className='CameraButtonContainer'>
                <div className="CameraButton" onClick={() => toggleCamera()}>
                    Enable Camera
                    <span className="arrow"></span>
                </div>
            </div>
            {cameraOn &&
                <div className='WebcamContainer'>
                    {/* <Webcam/> */}
                </div>
            }
        </div>
    );
}

export default Camera;
