import React from "react";
import "../styles/pages/Demo.css";
import "../styles/Home/Home.css";
import AnimatedPage from "../animations/AnimatedPage";
import CameraBackground from "../assets/Demo/CameraBackground.svg";
import OutlineButton from "../components/OutlineButton";
// import Camera from "../components/Camera";

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
            {/*<Camera/>*/}
            <div className="CameraBackgroundContainer">
                <img src={CameraBackground} alt="Camera Background" className="CameraBackground" />
            </div>
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
            <div className="Title" id="TroublePanelTitle">
                Having trouble with
                detection?
            </div>
            <div className="SubText" id="TroublePanelSubText">
                Here are the best practices to follow in order to get the best experience with
                SnapCycle:
            </div> 
            <div className="TroublePanelBulletContainer">
                <div className="TroublePanelBullet"> &#x2022; Fill over 50% of the camera with the object </div>
                <div className="TroublePanelBullet"> &#x2022; Line the objects to the middle of the camera </div>
                <div className="TroublePanelBullet"> &#x2022; Hold the object still for more than 10 seconds </div>
                <div className="TroublePanelBullet"> &#x2022; Remove any objects in the background or on you that could confuse the scanner </div>
            </div>
            <div className="SubText">
                Still not working? Contact us and let us in on the details.
            </div>
            <div className="TroublePanelButton">
                <OutlineButton title="Contact" destination="/Contact"/>
            </div>
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
