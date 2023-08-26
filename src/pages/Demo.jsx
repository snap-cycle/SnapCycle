import React from "react";
import "../styles/pages/Demo.css";
import "../styles/Home/Home.css";
import AnimatedPage from "../animations/AnimatedPage";
// import CameraBackground from "../assets/Demo/CameraBackground.svg";
import CameraBackground from "../assets/Demo/Shapes.jpg";

const DemoPanel = () => {

    return (
        <div className="DemoPanel">
            <div className="Title" id="DemoPanelTitle">
                SnapCycle Object
                Detector
            </div>
            <div className="TitleDivider"/>
            <div className="SubText" id="DemoPanelSubText">
                Scan any item in front of you, and let SnapCycle fill you in on
                how to dispose of it.
            </div>
            <div className="CameraContainer">
                <div className="CameraButtonContainer">
                    <button className="CameraButton">
                        Enable Camera
                    </button>
                </div>
                <img src={CameraBackground} alt="Camera Background" className="CameraBackground" />
            </div>
        </div>
    );
}

const HowPanel = () => {
    
    return (
        <div className="HowPanel">
            <div className="Title">
                How to Use
            </div>
            <div className="SubText">
                Here are the best practices to follow in order to get the best experience with
                SnapCycle:
            </div>
            <div className="SubText">
                - Fill over 50% of the camera with the object
                - Line the object to the middle of the camera
                - Hold the object still for more than 10 seconds
                - Remove any objects in the background or on you that would confuse
                the scanner
            </div>
            <div className="SubText">
                Still not working? Contact us and let us in on the details
            </div>
        </div>
    );
}

const TroublePanel = () => {

    return (
        <div className="TroublePanel">

        </div>
    );
}

const Demo = () => {
    return (
        <AnimatedPage>
            <DemoPanel/>
            <HowPanel/>
            <TroublePanel/>
        </AnimatedPage>
    )
}

export default Demo;
