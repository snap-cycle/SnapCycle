import React from 'react';
import '../styles/pages/Team.css';
import AnimatedPage from "../animations/AnimatedPage";
import {TeamInfo} from "../Info/TeamInfo";

const Team = () => {

    return (
        <AnimatedPage>
            <div className="team">
                <div className="team-landing-panel">
                    <h2>Our Team</h2>
                </div>
                <div className="team-members-container">
                    {
                        Object.keys(TeamInfo.teamMembers).map((key, index) => {
                            return (
                            <div className="team-member" key={index}>
                                {/*<img className="team-member-image" src={TeamInfo.teamMembers[key].imageSrc} alt={TeamInfo.teamMembers[key].imageAlt}/>*/}
                                <div className="team-member-name">{TeamInfo.teamMembers[key].name}</div>
                                <div className="team-member-role">{TeamInfo.teamMembers[key].role}</div>
                                {/*<div className="team-member-bio">{TeamInfo.teamMembers[key].bio}</div>*/}
                                <div className="team-member-contact-container">
                                    <div className="team-member-info-container">
                                        {
                                            Object.keys(TeamInfo.teamMembers[key].personaInfo).map((info, index) => {
                                                return (
                                                    <div key={index} className="team-member-info-item">{info}: {TeamInfo.teamMembers[key].personaInfo[info]}</div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="team-member-link-container">
                                        {
                                            Object.keys(TeamInfo.teamMembers[key].links).map((link, index) => {
                                                return (
                                                    <a className={"team-member-link-item"}
                                                       href={TeamInfo.teamMembers[key].links[link].link}
                                                       target="_blank"
                                                       rel="noreferrer"
                                                       key={index}
                                                    >
                                                        {TeamInfo.teamMembers[key].links[link].icon}
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </AnimatedPage>
    );
};
  
export default Team;
