import React from 'react';
import '../styles/Home/Home.css';
import PanelLanding from "../components/HomePanels/PanelLanding";
import PanelOne from "../components/HomePanels/PanelOne";
import PanelTwo from "../components/HomePanels/PanelTwo";
import PanelThree from "../components/HomePanels/PanelThree";
import PanelFour from "../components/HomePanels/PanelFour";
import PanelFive from "../components/HomePanels/PanelFive";

const Home = () => {
    return (
        <div>
            <PanelLanding/>
            <PanelOne/>
            <PanelTwo/>
            <PanelThree/>
            <PanelFour/>
            <PanelFive/>
        </div>
    )
}

export default Home;