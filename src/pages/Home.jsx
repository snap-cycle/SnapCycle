import React, {useEffect, useRef} from 'react';
import CountUp from 'react-countup';
import '../styles/Home/Home.css';
import '../styles/Home/PanelOne.css';
import '../styles/Home/PanelTwo.css';
import '../styles/Home/PanelThree.css';
import '../styles/Home/PanelFour.css';
import '../styles/Home/PanelFive.css';
import OutlineButton from "../components/OutlineButton";
import RecyclingBackground from "../assets/Home/RecyclingBackground.jpg";
import PlasticWrapper from "../assets/Home/ItemCategories/PlasticWrapper.png";
import PlasticBottle from "../assets/Home/ItemCategories/PlasticBottle.png";
import MetalCan from "../assets/Home/ItemCategories/MetalCan.png";
import GlassBottle from "../assets/Home/ItemCategories/GlassBottle.png";
import Battery from "../assets/Home/ItemCategories/Battery.png";
import PlasticBag from "../assets/Home/ItemCategories/PlasticBag.png";
import MobilePhone from "../assets/Home/ItemCategories/MobilePhone.png";
import CardboardBox from "../assets/Home/ItemCategories/CardboardBox.png";
import PaperCup from "../assets/Home/ItemCategories/PaperCup.jpg";
import CleaningBottle from "../assets/Home/ItemCategories/CleaningBottle.jpg";
import Tinfoil from "../assets/Home/ItemCategories/Tinfoil.jpg";
import Laptop from "../assets/Home/ItemCategories/Laptop.png";
import PlasticContainer from "../assets/Home/ItemCategories/PlasticContainer.png";
import ElectronicCoords from "../assets/Home/ItemCategories/ElectronicCoords.png";
import PaperBag from "../assets/Home/ItemCategories/PaperBag.png";
import Cigarette from "../assets/Home/ItemCategories/Cigarette.png";
import Mask from "../assets/Home/ItemCategories/Mask.png";
import Lightbulb from "../assets/Home/ItemCategories/Lightbulb.png";
import GameController from "../assets/Home/ItemCategories/GameController.png";
import Paper from "../assets/Home/ItemCategories/Paper.png";
import FoodContainer from "../assets/Home/ItemCategories/FoodContainer.png";
import Paint from "../assets/Home/ItemCategories/Paint.png";
import PanelTwoLaptopPhone from "../assets/Home/PanelTwoLaptopPhone.png"


const Home = () => {
    const leftScrollRef = useRef(null);
    const rightScrollRef = useRef(null);

    // Transforms the current vertical scroll to horizontal scroll
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const horizontalScroll = scrollY / 20; // Adjust the divisor to control the movement speed
        leftScrollRef.current.style.transform = `translateX(${-horizontalScroll}px)`;
        rightScrollRef.current.style.transform = `translateX(${horizontalScroll}px)`;
    };

    // Scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    return (
        <div>
            <div className="HomePanelLanding">
                <img src={RecyclingBackground} alt="Recycling Background" className="HomePanelLandingBackground"/>
            </div>
            <div className="PanelOne">
                <div className='Title'>
                    Hundreds of Objects<br></br> 
                    to Detect From, That<br></br>
                    Help You Recycle
                </div>
                <div className='ItemCategories'>
                    <div className='ItemRow' ref={leftScrollRef}>
                        <img src={PlasticWrapper} alt="Plastic Wrapper" className='Item' />
                        <img src={PlasticBottle} alt="Plastic Bottle" className='Item' />
                        <img src={MetalCan} alt="Metal Can" className='Item' />
                        <img src={GlassBottle} alt="Glass Bottle" className='Item' />
                        <img src={Battery} alt="Battery" className='Item' />
                        <img src={PlasticBag} alt="Plastic Bag" className='Item' />
                        <img src={MobilePhone} alt="Mobile Phone" className='Item' />
                        <img src={CardboardBox} alt="Cardboard Box" className='Item' />
                        <img src={PaperCup} alt="Paper Cup" className='Item' />
                        <img src={CleaningBottle} alt="Cleaning Bottle" className='Item' />
                        <img src={Tinfoil} alt="Tinfoil" className='Item' />
                    </div>
                    <div className='ItemRow' ref={rightScrollRef}>
                        <img src={Laptop} alt="Laptop" className='Item' />
                        <img src={PlasticContainer} alt="Plastic Container" className='Item' />
                        <img src={ElectronicCoords} alt="Electronic Coords" className='Item' />
                        <img src={PaperBag} alt="Paper Bag" className='Item' />
                        <img src={Cigarette} alt="Cigarette" className='Item' />
                        <img src={Mask} alt="Mask" className='Item' />
                        <img src={Lightbulb} alt="Lightbulb" className='Item' />
                        <img src={GameController} alt="Game Controller" className='Item' />
                        <img src={Paper} alt="Paper" className='Item' />
                        <img src={FoodContainer} alt="Food Container" className='Item' />
                        <img src={Paint} alt="Paint" className='Item' />
                    </div>
                </div>
            </div>
            <div className='PanelTwo'>
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
                    <img src={PanelTwoLaptopPhone} alt="Laptop and Phone" className='PanelTwoLaptopPhone' />
                </div>
            </div>
            <div className='PanelThree'>
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
            </div>
            <div className='PanelFour'>
                <div className='Title' id='PanelFourTitle'>
                    Let the Numbers Speak
                    for Themselves.
                </div>
                <div className='SubText' id="PanelFourSubText">
                    Take a glimpse into why responsible recycling 
                    matters now more than ever.
                </div>
                <div className='StatisticsContainer'>
                    <div className='StatisticOne'>
                        <div className='Title'>
                            <CountUp end={12700000} enableScrollSpy={true}/>
                        </div>
                        <div className='StatisticSubText'>
                            tonnes of plastic are littered into the ocean
                            every year.
                        </div>
                    </div>
                    <div className='StatisticTwo'>
                        <div className='Title'>
                            <CountUp end={11} suffix={" Masks"} enableScrollSpy={true}/>
                        </div>
                        <div className='StatisticSubText'>
                            are littered every hour.
                        </div>
                    </div>
                    <div className='StatisticThree'>
                        <div className='Title'>
                            <CountUp end={60} suffix={" %"} enableScrollSpy={true}/>
                        </div>
                        <div className='StatisticSubText'>
                            of water pollution is attributed
                            to litter.
                        </div>
                    </div>
                    <div className='StatisticFour'>
                        <div className='Title'>
                            <CountUp end={100000} enableScrollSpy={true}/>
                        </div>
                        <div className='StatisticSubText'>
                            animals are killed by plastic bags every year.
                        </div>
                    </div>
                </div>
            </div>
            <div className='PanelFive'>
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
            </div>
        </div>
    )
}

export default Home;