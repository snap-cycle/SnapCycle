import React from 'react';
import '../styles/Home/Home.css';
import '../styles/Home/PanelLanding.css';
import '../styles/Home/PanelOne.css';
import '../styles/Home/PanelTwo.css';
import '../styles/Home/PanelThree.css';
import '../styles/Home/PanelFour.css';
import '../styles/Home/PanelFive.css';
import BackgroundImage from "../assets/Home/RecyclingBackground.jpg";
import Ticker from "../components/Ticker";
import {TickerData} from "../Info/TickerInfo";
import OutlineButton from "../components/OutlineButton";
import PanelTwoLaptopPhone from "../assets/Home/PanelTwoLaptopPhone.png";
import Statistics from "../components/Statistics";
import {StatisticsInfo} from "../Info/StatisticsInfo";
import AnimatedPage from "../animations/AnimatedPage";
import TurtleLeft from "../assets/Home/TurtleLeft.png";
import TurtleRight from "../assets/Home/TurtleRight.png";


const PanelLanding = () => {
    return (
        <div className='HomePanelLanding'>
            <div className="panel-home-title">
                <img className="landing-background-image" alt="Landing Page Background" src={BackgroundImage}/>
                <div className="overlay"></div>
                <div className="HomepageContent">
                    <div className="HomepageTitle">
                        Saving the Turtles
                        One Snap at a Time.
                    </div>
                    <div className='HomepageButton'>
                        <OutlineButton title="Try Now" destination="/demo"/>
                    </div>
                    <div className='LearnMore'>
                        <span className='Words'>Learn More</span> -&#62;
                    </div>
                </div>
            </div>
        </div>
    )
}

const PanelOne = () => {
    return <div className="PanelOne">
        <div className='Title' id='PanelOneTitle'>
            Hundreds of Objects
            to Detect From, That
            Help You Recycle.
        </div>
        <div className='ItemCategories'>
            <Ticker items={TickerData.tickerItems1}/>
            <Ticker items={TickerData.tickerItems2} invert={true}/>
        </div>
    </div>;
}

const PanelTwo = () => {
    return <div className='PanelTwo'>
        <div className='PanelTwoText'>
            <div className='Title'>
                Take a Snap of Any
                Item, Anywhere.
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
        <Statistics statistics={StatisticsInfo}/>
    </div>;
}

const PanelFive = () => {
    return <div className='PanelFive'>
        <div className='Title' id='PanelFiveTitle'>
            Join Forces for a Greener
            Earth - Let's Make a
            Change Together.
        </div>
        <div className='SubText' id='PanelFiveText'>
            At SnapCycle, we want to encourage others to do everything
            they can in contributing towards a stronger future. It is our
            responsibility to provide the privilege we own down to our
            future generations.
        </div>
        <div className='PanelFiveButtonContainer'>
            <div className='PanelFiveButton'>
                <OutlineButton title="Try Now" destination="/demo"/>
            </div>
        </div>
        <div className='TurtleContainer'>
            <img src={TurtleLeft} alt="Left Turtle" className='TurtleLeft'/>
            <div></div>
            <img src={TurtleRight} alt="Right Turtle" className='TurtleRight'/>
        </div>
    </div>;
}


const Home = () => {
    return (
        <AnimatedPage>
            <PanelLanding/>
            <PanelOne/>
            <PanelTwo/>
            <PanelThree/>
            <PanelFour/>
            <PanelFive/>
        </AnimatedPage>
    )
}

export default Home;