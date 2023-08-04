import StatisticsRow from "../StatisticsRow";
import {StatisticsData} from "../../data/StatisticsData";
import React from "react";
import '../../styles/Home/PanelFour.css';

const PanelFour = () => {

    return <div className='PanelFour'>
        <div className='Title' id='PanelFourTitle'>
            Let the Numbers Speak
            for Themselves.
        </div>
        <div className='SubText' id="PanelFourSubText">
            Take a glimpse into why responsible recycling
            matters now more than ever.
        </div>
        <StatisticsRow statistics={StatisticsData}/>
    </div>;
}

export default PanelFour;
