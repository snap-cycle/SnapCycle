import OutlineButton from "../OutlineButton";
import React from "react";
import '../../styles/Home/PanelThree.css';

const PanelThree = () => {
    return <div className='PanelThree'>
        <div className='PanelThreeImage'>

        </div>
        <div className='PanelThreeText'>
            <div className='Title'>
                Can't Take a Picture?<br></br>
                No Worries!
            </div>
            <div className='SubText'>
                Search through our ever growing database<br></br>
                of objects to learn how to dispose of them.<br></br>
                Say no more to scientific articles going into<br></br>
                detail on things you don't need to know!
            </div>
            <div className='SubText'>
                Try out SnapCycle and unlock the secrets<br></br>
                of sustainable living today.
            </div>
            <div className='PanelThreeButton'>
                <OutlineButton title="Try Now" destination="/demo"/>
            </div>
        </div>
    </div>;
}

export default PanelThree;
