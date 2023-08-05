import React, {useEffect} from 'react';
import '../styles/Team.css';
import AnimatedPage from "../animations/AnimatedPage";
import {TeamInfo} from "../Info/TeamInfo";

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <AnimatedPage>
            <div className="team-landing-panel">
                <h2>Our Team</h2>
            </div>
            <div className="team-members-container">
                {
                    TeamInfo.teamMembers.map((person, index) => (
                        <div className="team-member" key={index}>
                            <div className="team-member-name">{person.name}</div>
                            <div className="team-member-role">{person.role}</div>
                            <img className="team-member-image" src={person.imageSrc} alt={person.imageAlt}/>
                            <div className="team-member-links-container">

                            </div>
                        </div>
                    ))
                }
            </div>
        </AnimatedPage>
    );
};
  
export default Team;