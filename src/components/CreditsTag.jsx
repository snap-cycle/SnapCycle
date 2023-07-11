import React from 'react';
import '../styles/CreditsTag.css';
const CreditsTag = ({names}) => {
    return (
        <div className="credits">
            <a className="credits-link" href="https://aidanfroggatt.github.io/portfolio/#/home"
               target="_blank" rel="noreferrer">
                Developed by {names}
            </a>
        </div>
    );
};

export default CreditsTag;