import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';

const Camera = () => {
    const [cameraStarted, setCameraStarted] = useState(false);
    var video;

    useEffect(() => {
        return () => {
            console.log("unmounting...");
            stopCamera();
        };
    }, []);

    // Function to activate camera when button clicked
    const startCamera = async () => {
        try {
            // Set up camera settings
            video = document.querySelector("video");
            const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: 'environment', // or 'user' for selfie
                aspectRatio: 16 / 9,
            },
            });
            video.srcObject = stream;
            video.onloadeddata = function () {
                video.play();
            };

            setCameraStarted(true);
            console.log("loaded");
        } 
        catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    // Function to stop camera when component is unmounted
    const stopCamera = () => {
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }

        console.log("unmounted");
    };

    const CameraButton = () => {
        return (
            <div className="CameraButtonContainer" style={{ display: cameraStarted ? 'none' : '' }}>
                <div className="CameraButton" onClick={startCamera}>
                    Enable Camera
                    <span className="arrow"></span>
                </div>
            </div>
        );
    };

    const VideoContainer = () => {
        return (
            <div className="VideoContainer">
                <video
                    id="video"
                    autoPlay
                    muted
                    playsInline
                    style={{ display: cameraStarted ? 'block' : 'none' }}
                ></video>
            </div>
        );
    };

    return (
    <div>
        {CameraButton()}
        {VideoContainer()}
    </div>
    );
};

export default Camera;