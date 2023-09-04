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

        // Add listener for whenever the video changes size
        window.addEventListener('resize', resizeCanvas);

        // Clean up when component unmounts
        return () => {
            document.body.removeChild(script);
            window.removeEventListener('resize', resizeCanvas);
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

    // Function to retrieve current dimensions of camera for the canvas
    const videoDimensions = () => {
        const video = videoRef.current;

        if (!video) return null;

        // Ratio of the video's intrinsic dimensions
        const videoRatio = video.videoWidth / video.videoHeight;

        // The width and height of the video element
        const width = video.offsetWidth;
        const height = video.offsetHeight;

        // The ratio of the element's width to its height
        const elementRatio = width / height;

        let newWidth = width;
        let newHeight = height;

        // If the video element is short and wide
        if (elementRatio > videoRatio) {
            newWidth = height * videoRatio;
        } else {
            // It must be tall and thin, or exactly equal to the original ratio
            newHeight = width / videoRatio;
        }

        return {
            width: newWidth,
            height: newHeight,
        };
    };

    // Function to resize canvas whenever the camera is resized
    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        const dimensions = videoDimensions();

        if (!canvas || !dimensions) return;

        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        canvas.style.width = dimensions.width + 'px';
        canvas.style.height = dimensions.height + 'px';
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
                <canvas ref={canvasRef} className='ModelCanvas'></canvas>
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