import { React, useRef, useEffect } from 'react';
import '../styles/pages/Team.css';
import AnimatedPage from "../animations/AnimatedPage";
import Luai from '../assets/Team/Luai.png';
import LuaiBackground from '../assets/Team/LuaiBackground.png';
import AidanBackground from '../assets/Team/AidanBackground.png';
import LinkedIn from '../assets/Team/LinkedIn.png';
import Github from '../assets/Team/Github.svg';
import Globe from '../assets/Team/Globe.svg';
import Mail from '../assets/Team/Mail.png';

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
                    <Member name="Luai Bashar" role="Software Developer" headshot={Luai} background={LuaiBackground} colour="#FF6161"/>
                    <Member name="Aidan Froggatt" role="Software Developer" background={AidanBackground} colour="#7299FF"/>
                </div>
            </div>
        </AnimatedPage>
    );
};

const Member = ({name, role, headshot, background, colour}) => {
    const headshotRef = useRef(null);

    useEffect(() => {
        headshotRef.current.style.backgroundColor = colour;
    }, [colour]);

    return (
        <div className='MemberContainer'>
            <div className='HeadshotContainer' ref={headshotRef}>
                <img src={headshot} alt="" className='Headshot'/>
                <img src={background} alt="" className='HeadshotBackground'/>
            </div>
            <div className='MemberInfoContainer'>
                <div className='TextContainer'>
                    <div className='MemberName'>
                        {name}
                    </div>
                    <div className='MemberRole'>
                        {role}
                    </div>
                </div>
                <div className='MemberLinks'>
                    <img src={LinkedIn} alt="" className='Link'/>
                    <img src={Github} alt="" className='Link'/>
                    <img src={Globe} alt="" className='Link' />
                    <img src={Mail} alt="" className='Link'/>
                </div>
            </div>
        </div>
    );
};
  
export default Team;
