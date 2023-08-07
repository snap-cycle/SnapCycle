import React, {useEffect} from 'react';
import '../styles/Team.css';
import AnimatedPage from "../animations/AnimatedPage";
import {TeamInfo} from "../Info/TeamInfo";

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    Object.keys(TeamInfo.teamMembers).forEach((key) => {
        console.log(TeamInfo.teamMembers[key]);
        Object.keys(TeamInfo.teamMembers[key]).forEach((key2) => {
            console.log(TeamInfo.teamMembers[key][key2]);
        });
    });

    return (
        <AnimatedPage>
            <div className="team-landing-panel">
                <h2>Our Team</h2>
            </div>
            <div className="team-members-container">
                <div className="team-member">
                    <img className="team-member-image" src={""} alt={"alt"}/>
                    <div className="team-member-name"></div>
                    <div className="team-member-role"></div>
                    <div className="team-member-bio"></div>
                    <div className="team-member-contact-container">
                        <div className="team-member-links-container"></div>
                        <div className="team-member-personal-info-container"></div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};
  
export default Team;