import React from 'react';
import '../styles/Home.css';
import SlideIn from "../animations/SlideIn";

const Home = () => {



    return (
        <div>
            <div className="panel-landing">
                Home
            </div>
            <SlideIn direction="left">
                <div className="panel">
                    panel 1
                </div>
            </SlideIn>
            <div className="panel">
                panel 2
            </div>
            <div className="panel">
                panel 3
            </div>
        </div>
    )
}

export default Home;