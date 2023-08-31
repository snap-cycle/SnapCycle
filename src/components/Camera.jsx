import {React, useState} from 'react';
import '../styles/components/OutlineButton.css';
import '../styles/components/Camera.css';

const Camera = () => {
    const [cameraOn, setCameraOn] = useState(false);

    const toggleCamera = () => {
        setCameraOn(true);
        document.querySelector('.CameraButton').style.display = 'none';

        // const script1 = document.createElement('script');
        // script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
        // script1.integrity = 'sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==';
        // script1.crossOrigin = 'anonymous'; // Important for security
    
        // const script2 = document.createElement('script');
        // script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js';
        // script2.integrity = 'sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==';
        // script2.crossOrigin = 'anonymous';
    
        // const script3 = document.createElement('script');
        // script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/async/3.2.0/async.min.js';
        // script3.integrity = 'sha512-6K6+H87tLdCWvY5ml9ZQXLRlPlDEt8uXmtELhuJRgFyEDv6JvndWHg3jadJuBVGPEhhA2AAt+ROMC2V7EvTIWw==';
        // script3.crossOrigin = 'anonymous';
    
        // const script4 = document.createElement('script');
        // script4.src = 'https://cdn.roboflow.com/0.2.26/roboflow.js';

        // const script5 = document.createElement('script');
        // script5.src = './Camera.js';
    
        // document.body.appendChild(script1);
        // document.body.appendChild(script2);
        // document.body.appendChild(script3);
        // document.body.appendChild(script4);
        // document.body.appendChild(script5);

        const video = document.querySelector("video");
        const cameraMode = "environment"; // or "user"
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
                    <video id="video" autoplay muted playsinline></video>
                </div>
            }
        </div>
    );
}

export default Camera;
