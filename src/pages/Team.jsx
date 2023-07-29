import React, {useEffect} from 'react';
import '../styles/Team.css';
import AnimatedPage from "../animations/AnimatedPage";

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <AnimatedPage>
            <div className="TeamPanelLanding">
                <h2>Our Team</h2>
                <p>Aidan, Luai, Gabe, Harry</p>
            </div>
        </AnimatedPage>
    );
};
  
export default Team;