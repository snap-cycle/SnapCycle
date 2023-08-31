import {React, useState, useEffect} from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';

const Camera = () => {
    const [cameraOn, setCameraOn] = useState(false);

    useEffect(() => {
        if (cameraOn) {
            // Removes button
            document.querySelector('.CameraButton').style.display = 'none';

            // Sets up and displays camera for user
            const video = document.querySelector("video");
            const cameraMode = "environment"; // environment for outwards, user for selfie. selfie if outwards not available
            const ratio = 16/9; // The width to height ratio of the camera
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    facingMode: cameraMode,
                    aspectRatio: ratio
                }
            })
            .then(function (stream) {
                video.srcObject = stream;
                video.onloadeddata = function () {
                    video.play();
                };
            });

            // Clean up the video stream when the component unmounts
            return () => {
                if (video.srcObject) {
                    video.srcObject.getTracks().forEach(track => track.stop());
                }
            };
        }
    }, [cameraOn]);

    return (
        <div>
            <div className='CameraButtonContainer'>
                <div className="CameraButton" onClick={() => setCameraOn(true)}>
                    Enable Camera
                    <span className="arrow"></span>
                </div>
            </div>
            {cameraOn && <video id="video" autoplay muted playsinline></video>}
        </div>
    );
}

export default Camera;
