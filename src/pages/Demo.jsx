import React from "react";
import "../styles/pages/Demo.css";
import "../styles/Home/Home.css";
import AnimatedPage from "../animations/AnimatedPage";
import CameraBackground from "../assets/Demo/CameraBackground.svg";

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
        </div>
    );
}

const CameraPanel = () => {

    return (
        <div className="CameraPanel">
            {/* <div className="CameraButtonContainer">
                <button className="CameraButton">
                    Enable Camera
                </button>
            </div> */}
            {/* <img src={CameraBackground} alt="Camera Background" className="CameraBackground" /> */}
        </div>
    );
}

const HowPanel = () => {
    
    return (
        <div className="HowPanel">
            <div className="HowPanelContainer">
                <div className="Title">
                    How to Use
                </div>
                <div className="SubText">
                    1. Click the "Enable Button" camera to allow SnapCycle to see you!
                </div>
                <div className="SubText">
                    2. Line the object up in the middle of the screen and hold it still.
                </div>
                <div className="SubText">
                    3. Wait a few seconds and SnapCycle will detect it!
                </div>
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
            <CameraPanel/>
            <HowPanel/>
            <TroublePanel/>
        </AnimatedPage>
    )
}

export default Demo;
