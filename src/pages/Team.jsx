import React from 'react';
import '../styles/Team.css';
import AnimatedPage from "../animations/AnimatedPage";

const Team = () => {

    return (
        <AnimatedPage>
            <div className="panel-landing">
                <h2>Our Team</h2>
                <p>Aidan, Luai, Gabe?, <s>Harry</s></p>
            </div>
        </AnimatedPage>
    );
};
  
export default Team;