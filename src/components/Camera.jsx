import {React, useEffect} from 'react';
import $ from 'jquery';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';

const Camera = () => {
    useEffect(() => {
        // Import roboflow script to allow model to work
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

    // Function to activate camera and scan it with model
    $(function () {
        const video = $("video")[0];
        const startButton = document.querySelector('.CameraButton');
        const camera = document.querySelector('#video');
    
        var model;
        var cameraMode = "environment"; // environment is outwards, user is selfie. If no environment, uses selfie
        var ratio = 16 / 9; // The width to height ratio of the camera
    
        startButton.addEventListener("click", function () {
            startButton.style.display = 'none';             // Makes button dissapear, and have camera appear
            camera.style.display = 'block';
            startCamera();
        });
    
        function startCamera() {
            const startVideoStreamPromise = navigator.mediaDevices
                .getUserMedia({
                    audio: false,
                    video: {
                        facingMode: cameraMode,
                        aspectRatio: ratio,
                    },
                })
                .then(function (stream) {
                    return new Promise(function (resolve) {
                        video.srcObject = stream;
                        video.onloadeddata = function () {
                            video.play();
                            resolve();
                        };
                    });
                });
    
            var publishable_key = "rf_Pie3L75SxoaXKnDxrk8D";
            var toLoad = {
                model: "snapcycle-4vdlw",
                version: 1,
            };
    
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
    
            Promise.all([startVideoStreamPromise, loadModelPromise]).then(function () {
                camera.style.filter = 'none';   // Removes loading dark screen
                resizeCanvas();
                detectFrame();
            });
        }
    
        var canvas, ctx;
        const font = "16px sans-serif";
    
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
    
        $(window).resize(function () {
            resizeCanvas();
        });
    
        const resizeCanvas = function () {
            $("canvas").remove();
    
            canvas = $("<canvas/>");
    
            ctx = canvas[0].getContext("2d");
    
            var dimensions = videoDimensions(video);
    
            console.log(
                video.videoWidth,
                video.videoHeight,
                video.offsetWidth,
                video.offsetHeight,
                dimensions
            );
    
            canvas[0].width = video.videoWidth;
            canvas[0].height = video.videoHeight;
    
            canvas.css({
                width: dimensions.width,
                height: dimensions.height,
                position: 'absolute',
                top: 0
            });

            const cameraContainer = document.querySelector('.VideoContainer');
            $(cameraContainer).append(canvas);
        };
    
        const renderPredictions = function (predictions) {
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
    
        var prevTime;
        var pastFrameTimes = [];
        const detectFrame = function () {
            if (!model) return requestAnimationFrame(detectFrame);
    
            model
                .detect(video)
                .then(function (predictions) {
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
                .catch(function (e) {
                    console.log("CAUGHT", e);
                    requestAnimationFrame(detectFrame);
                });
        };
    });

    return (
        <div>
            <div className='CameraButtonContainer'>
                <div className="CameraButton">
                    Enable Camera
                    <span className="arrow"></span>
                </div>
            </div>
            <div className='VideoContainer'>
                <video id="video" autoPlay muted playsInline></video>
            </div>
        </div>
    );
}

export default Camera;
