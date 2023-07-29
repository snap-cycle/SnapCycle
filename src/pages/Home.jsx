import React, {useEffect} from 'react';
import '../styles/Home.css';
import SlideIn from "../animations/SlideIn";
import AnimatedPage from "../animations/AnimatedPage";
import RecyclingBackground from "../assets/Home/RecyclingBackground.jpg";
import PlasticWrapper from "../assets/Home/ItemCategories/PlasticWrapper.png";
import PlasticBottle from "../assets/Home/ItemCategories/PlasticBottle.png";
import MetalCan from "../assets/Home/ItemCategories/MetalCan.png";
import GlassBottle from "../assets/Home/ItemCategories/GlassBottle.png";
import Battery from "../assets/Home/ItemCategories/Battery.png";
import PlasticBag from "../assets/Home/ItemCategories/PlasticBag.png";
import MobilePhone from "../assets/Home/ItemCategories/MobilePhone.png";
import CardboardBox from "../assets/Home/ItemCategories/CardboardBox.png";
import Laptop from "../assets/Home/ItemCategories/Laptop.png";
import PlasticContainer from "../assets/Home/ItemCategories/PlasticContainer.png";
import ElectronicCoords from "../assets/Home/ItemCategories/ElectronicCoords.png";
import PaperBag from "../assets/Home/ItemCategories/PaperBag.png";
import Cigarette from "../assets/Home/ItemCategories/Cigarette.png";
import Mask from "../assets/Home/ItemCategories/Mask.png";
import Lightbulb from "../assets/Home/ItemCategories/Lightbulb.png";
import GameController from "../assets/Home/ItemCategories/GameController.png";



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <AnimatedPage>
            <div className="HomePanelLanding">
                <img src={RecyclingBackground} alt="Recycling Background" className="HomePanelLandingBackground"/>
            </div>
            <div className="PanelOne">
                <div className='Title' id="PanelOneTitle">
                    Thousands of objects<br></br> 
                    to detect from, that<br></br>
                    help you recycle
                </div>
                <div className='ItemCategories'>
                    <div className='ItemRow'>
                        <img src={PlasticWrapper} alt="Plastic Wrapper" className='Item' />
                        <img src={PlasticBottle} alt="Plastic Bottle" className='Item' />
                        <img src={MetalCan} alt="Metal Can" className='Item' />
                        <img src={GlassBottle} alt="Glass Bottle" className='Item' />
                        <img src={Battery} alt="Battery" className='Item' />
                        <img src={PlasticBag} alt="Plastic Bag" className='Item' />
                        <img src={MobilePhone} alt="Mobile Phone" className='Item' />
                        <img src={CardboardBox} alt="Cardboard Box" className='Item' />
                    </div>
                    <div className='ItemRow'>
                        <img src={Laptop} alt="Laptop" className='Item' />
                        <img src={PlasticContainer} alt="Plastic Container" className='Item' />
                        <img src={ElectronicCoords} alt="Electronic Coords" className='Item' />
                        <img src={PaperBag} alt="Paper Bag" className='Item' />
                        <img src={Cigarette} alt="Cigarette" className='Item' />
                        <img src={Mask} alt="Mask" className='Item' />
                        <img src={Lightbulb} alt="Lightbulb" className='Item' />
                        <img src={GameController} alt="Game Controller" className='Item' />
                    </div>
                </div>
            </div>
            <div className="panel">
                <SlideIn>
                    <div>
                        panel 2
                    </div>
                </SlideIn>
            </div>
            <div className="panel">
                <SlideIn invert={true}>
                    <div>
                        panel 3
                    </div>
                </SlideIn>
            </div>
        </AnimatedPage>
    )
}

export default Home;