import React from 'react';
import '../styles/Home.css';
import SlideIn from "../animations/SlideIn";
import AnimatedPage from "../animations/AnimatedPage";

const Home = () => {



    return (
        <AnimatedPage>
            <div className="panel-landing">
                Home
            </div>
            <div className="panel">
                panel 1
            </div>
            <SlideIn>
                <div className="panel">
                    panel 2
                </div>
            </SlideIn>
            <SlideIn invert={true}>
                <div className="panel">
                    panel 3
                </div>
            </SlideIn>
        </AnimatedPage>
    )
}

export default Home;