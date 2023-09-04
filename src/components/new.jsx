import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';

const Camera = () => {
    const [cameraStarted, setCameraStarted] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        // Load Roboflow script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://cdn.roboflow.com/0.2.26/roboflow.js';

        // For some reason if I dont have this portion, the script won't load?????
        script.onload = () => {
            console.log('Script has been loaded');
        };

        // Append the script to the document body
        document.body.appendChild(script);

        // Clean up by removing the script when the component unmounts
        return () => {
            document.body.removeChild(script);
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
            loadModel();
            resizeCanvas();
            detectFrame();
        } 
        catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    // Function to load model from roboflow to be used
    const loadModel = () => {
        var model;
        var publishable_key = "rf_Pie3L75SxoaXKnDxrk8D";
        var toLoad = {
            model: "snapcycle-4vdlw",
            version: 1,
        };
        const camera = document.querySelector('#video');

        const loadModelPromise = new Promise(function (resolve, reject) {
            roboflow
                .auth({
                    publishable_key: publishable_key,
                })
                .load(toLoad)
                .then(function (m) {
                    model = m;
                    resolve();
                });
        });

        Promise.all([loadModelPromise]).then(function () {
            camera.style.filter = 'none';   // Removes loading dark screen
        });
    };

    function videoDimensions(video) {
        // Ratio of the video's intrisic dimensions
        var videoRatio = video.videoWidth / video.videoHeight;

        // The width and height of the video element
        var width = video.offsetWidth,
            height = video.offsetHeight;

        // The ratio of the element's width to its height
        var elementRatio = width / height;

        // If the video element is short and wide
        if (elementRatio > videoRatio) {
            width = height * videoRatio;
        } else {
            // It must be tall and thin, or exactly equal to the original ratio
            height = width / videoRatio;
        }

        return {
            width: width,
            height: height
        };
    }

    const resizeCanvas = () => {
        if (videoRef.current) {
            const { videoWidth, videoHeight } = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = videoWidth;
            canvas.height = videoHeight;
        }
    };

    const detectFrame = () => {
    // Implement the model detection logic here
    // You can use Roboflow or any other library for this
    // Update the canvas or state with the detection results
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
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0 }}></canvas>
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