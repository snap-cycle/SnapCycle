import { React, useRef, useEffect } from 'react';
import '../styles/pages/Team.css';
import AnimatedPage from "../animations/AnimatedPage";
import Luai from '../assets/Team/Luai.png';

const Team = () => {

    return (
        <AnimatedPage>
            <div className="TeamPanel">
                <div className='Title'>
                    Meet The Team.
                </div>
                <div className="TeamTitleDivider"/>
                <div className='SubText' id='TeamSubtext'>
                    Meet the people who make SnapCycle possible!
                </div>
                <div className='MembersContainer'>
                    <Member name="Luai Bashar" role="Software Developer" headshot={Luai} colour="#FF6161"/>
                    <Member name="Aidan Froggatt" role="Software Developer" colour="#7299FF"/>
                </div>
            </div>
        </AnimatedPage>
    );
};

const Member = ({name, role, headshot, colour}) => {
    const headshotRef = useRef(null);

    useEffect(() => {
        headshotRef.current.style.backgroundColor = colour;
    }, [colour]);

    return (
        <div className='MemberContainer'>
            <div className='HeadshotContainer' ref={headshotRef}>
                <img src={headshot} alt="" className='Headshot'/>
            </div>
            <div className='TextContainer'>
                <div className='MemberName'>
                    {name}
                </div>
                <div className='MemberRole'>
                    {role}
                </div>
            </div>
        </div>
    );
};
  
export default Team;
