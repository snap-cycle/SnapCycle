import React from 'react';
import '../styles/HelpCenter.css';
import AnimatedPage from "../animations/AnimatedPage";
const HelpCenter = () => {
    return (
        <AnimatedPage>
            <div className="min-h-screen flex flex-col justify-center align-middle items-center">
                <h1>Help Center</h1>
                <p>Currently in development</p>
            </div>
        </AnimatedPage>
    );
}

export default HelpCenter;
