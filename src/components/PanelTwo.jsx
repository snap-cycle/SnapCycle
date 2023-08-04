import OutlineButton from "./OutlineButton";
import PanelTwoLaptopPhone from "../assets/Home/PanelTwoLaptopPhone.png";
import React from "react";
import '../styles/Home/PanelTwo.css';


const PanelTwo = () => {
    return <div className='PanelTwo'>
        <div className='PanelTwoText'>
            <div className='Title'>
                Take a Snap of Any
                Item, Anywhere
            </div>
            <div className='SubText'>
                Take a picture of the object in front of you,
                that&#39;s all you have to do! Let SnapCycle do
                the rest as it detects the object for you,
                and lets you in on all the sweet disposing details.
            </div>
            <div className='SubText'>
                Try out SnapCycle and experience the power of smooth
                recycling today.
            </div>
            <div className='PanelTwoButton'>
                <OutlineButton title="Try Now" destination="/demo"/>
            </div>
        </div>
        <div className='PanelTwoImages'>
            <img src={PanelTwoLaptopPhone} alt="Laptop and Phone" className='PanelTwoLaptopPhone'/>
        </div>
    </div>;
}

export default PanelTwo;
