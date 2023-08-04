import OutlineButton from "../OutlineButton";
import React from "react";
import '../../styles/Home/PanelFive.css';

const PanelFive = () => {
    return <div className='PanelFive'>
        <div className='Title' id='PanelFiveTitle'>
            Join Forces for a Greener
            Earth - Let's Make a
            Change Together
        </div>
        <div className='SubText' id='PanelFiveText'>
            At SnapCycle, we want to encourage others to do everything
            they can in contributing towards a stronger future. It is our
            responsibility to provide the privilege we own down to our
            future generations.
        </div>
        <div className='PanelFiveButton'>
            <OutlineButton title="Try Now" destination="/demo"/>
        </div>
    </div>;
}

export default PanelFive;
