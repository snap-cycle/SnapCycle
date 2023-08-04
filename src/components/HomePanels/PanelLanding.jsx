import '../../styles/Home/PanelLanding.css';
import React from "react";
import BackgroundImage from "../../assets/Home/RecyclingBackground.jpg";

const PanelLanding = () => {

    return (
        <div className='HomePanelLanding'>
            <div className="panel-home-title">
                <img className="landing-background-image" alt="Background Image For Landing Page" src={BackgroundImage}/>
                <div className="overlay"></div>
                <div className="homepage-title">SnapCycle</div>
            </div>
        </div>
    )
}

export default PanelLanding;
