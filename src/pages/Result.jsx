import React from 'react';
import '../styles/pages/Result.css';
import { ItemInfo } from '../Info/ItemInfo.jsx';

const Result = () => {
    let item = "Plastic Bottle"
    switch (item) {
        case "Plastic Bottle":
            return (
                <div className="result-page">
                    <img className="result-page-background" src={ItemInfo["Plastic Bottle"].background} alt="result-background-image"/>
                    <div className="result-disposal-methods">
                        <h1>Disposal Methods</h1>
                        <div className="disposal-process">
                            {
                                Object.keys(ItemInfo["Plastic Bottle"].dispsal).map((key) => {
                                    return (
                                        <div className="disposal-process-step" key={key}>
                                            <h1>{key}</h1>
                                            <img className="disposal-method-image"
                                                 src={ItemInfo["Plastic Bottle"].dispsal[key].image}
                                                 alt="disposal-method-image"/>
                                            <p className="disposal-method-text">{ItemInfo["Plastic Bottle"].dispsal[key].text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
    }
}

export default Result;
