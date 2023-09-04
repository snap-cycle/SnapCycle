import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';

const Camera = () => {
    const [cameraStarted, setCameraStarted] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    var ctx;
    var model;
    const font = "16px sans-serif";

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
        } 
        catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    // Function to load model from roboflow to be used
    const loadModel = () => {
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
            resizeCanvas();                 // Must be called in loadModel otherwise no scanning occurs until canvas resized
            detectFrame();                
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
        var canvasClass = document.querySelector('.ModelCanvas');
        ctx = canvasClass.getContext("2d");

        const canvas = canvasRef.current;
        const dimensions = videoDimensions();

        if (!canvas || !dimensions) return;

        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        canvas.style.width = dimensions.width + 'px';
        canvas.style.height = dimensions.height + 'px';
    };

    var prevTime;
    var pastFrameTimes = [];
    // Function to pass each video frame into the model
    const detectFrame = () => {
        const video = videoRef.current;

        if (!model) return requestAnimationFrame(detectFrame);

        model
            .detect(video)
            .then((predictions) => {
                requestAnimationFrame(detectFrame);
                renderPredictions(predictions);

                if (prevTime) {
                    pastFrameTimes.push(Date.now() - prevTime);
                    if (pastFrameTimes.length > 30) pastFrameTimes.shift();

                    var total = 0;
                    _.each(pastFrameTimes, function (t) {
                        total += t / 1000;
                    });
                }
                prevTime = Date.now();
            })
            .catch((e) => {
                console.log("CAUGHT", e);
                requestAnimationFrame(detectFrame);
            });
    };

    // Function to render every frame and detect any objects in frame
    const renderPredictions = (predictions) => {
        var dimensions = videoDimensions(video);
        var scale = 1;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        predictions.forEach(function (prediction) {
            const x = prediction.bbox.x;
            const y = prediction.bbox.y;

            const width = prediction.bbox.width;
            const height = prediction.bbox.height;

            // Draw the bounding box.
            ctx.strokeStyle = prediction.color;
            ctx.lineWidth = 4;
            ctx.strokeRect(
                (x - width / 2) / scale,
                (y - height / 2) / scale,
                width / scale,
                height / scale
            );

            // Draw the label background.
            ctx.fillStyle = prediction.color;
            const textWidth = ctx.measureText(prediction.class).width;
            const textHeight = parseInt(font, 10); // base 10
            ctx.fillRect(
                (x - width / 2) / scale,
                (y - height / 2) / scale,
                textWidth + 8,
                textHeight + 4
            );
        });

        predictions.forEach(function (prediction) {
            const x = prediction.bbox.x;
            const y = prediction.bbox.y;

            const width = prediction.bbox.width;
            const height = prediction.bbox.height;

            // Draw the text last to ensure it's on top.
            ctx.font = font;
            ctx.textBaseline = "top";
            ctx.fillStyle = "#000000";
            ctx.fillText(
                prediction.class,
                (x - width / 2) / scale + 4,
                (y - height / 2) / scale + 1
            );

            console.log(prediction.class + " has been detected.");
        });
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