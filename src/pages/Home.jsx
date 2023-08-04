import React from 'react';
import '../styles/Home/Home.css';
import RecyclingBackground from "../assets/Home/RecyclingBackground.jpg";
import PanelOne from "../components/PanelOne";
import PanelTwo from "../components/PanelTwo";
import PanelThree from "../components/PanelThree";
import PanelFour from "../components/PanelFour";
import PanelFive from "../components/PanelFive";

const Home = () => {
    return (
        <div>
            <div className="HomePanelLanding">
                <img src={RecyclingBackground} alt="Recycling Background" className="HomePanelLandingBackground"/>
            </div>
            <PanelOne/>
            <PanelTwo/>
            <PanelThree/>
            <PanelFour/>
            <PanelFive/>
        </div>
    )
}

export default Home;