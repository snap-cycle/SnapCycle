import React, {useEffect} from 'react';
import '../styles/Home.css';
import SlideIn from "../animations/SlideIn";
import AnimatedPage from "../animations/AnimatedPage";
import RecyclingBackground from "../assets/Home/RecyclingBackground.jpg";


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
                    Thousands of objects to detect from, that help you recycle
                </div>
                <div className='ItemCategories'>

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