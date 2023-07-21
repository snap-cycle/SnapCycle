import React from 'react';
import '../styles/NewFooter.css';
import WhiteLogo from "../assets/branding/WhiteLogo.png";
import OutlineButton from "./OutlineButton";

const NewFooter = ({pages}) => {


    return (
        <div>
            <div className='MainFooter'>
                <div className='FooterLeft'>
                    <div className='FooterLogoName'>
                        <img src={WhiteLogo} alt="SnapCycle Logo" className="FooterLogoImage"/>
                        <div className='SnapcycleTitle'>
                            SnapCycle
                        </div>
                    </div>
                    <div className='ProjectSlogan'>
                        Saving the turtles one snap at a time.
                    </div>
                    <div className='TryNowMessage'>
                        Try now at now cost!
                    </div>
                    <OutlineButton title="Demo" destination="/demo"/>
                    <hr className='Divider'/>
                    <div className='SocialMedia'>

                    </div>
                </div>
            </div>
            <div className='BottomFooter'>
                
            </div>
        </div>
    )
}

export default NewFooter;