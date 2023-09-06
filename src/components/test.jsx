import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';

const Camera = () => {
    const [cameraStarted, setCameraStarted] = useState(false);
    const videoRef = useRef(null);

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
            const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: 'environment', // or 'user' for selfie
                aspectRatio: 16 / 9,
            },
            });
            videoRef.current.srcObject = stream;
            await videoRef.current.play();

            setCameraStarted(true);
            console.log("loaded");
        } 
        catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    // Function to stop camera when component is unmounted
    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
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
                    ref={videoRef}
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