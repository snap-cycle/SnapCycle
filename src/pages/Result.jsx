import React from 'react';
import '../styles/pages/Result.css';
import { ItemInfo } from '../Info/ItemInfo.jsx';

const Result = () => {
    let item = "Plastic Bottle"
    switch (item) {
        case "Plastic Bottle":
            return (
                <div className="result-page">
                    <img className="result-page-background" src={ItemInfo["Plastic Bottle"].background} alt="result-background"/>
                    <div className="result-disposal-methods">
                        <h1 className="result-h1">Disposal Methods</h1>
                        <div className="disposal-process">
                            {
                                Object.keys(ItemInfo["Plastic Bottle"].dispsal).map((key) => {
                                    return (
                                        <div className="disposal-process-step" key={key}>
                                            <h1>{key}</h1>
                                            <img className="disposal-method"
                                                 src={ItemInfo["Plastic Bottle"].dispsal[key].image}
                                                 alt="disposal-method"/>
                                            <p className="disposal-method-text">{ItemInfo["Plastic Bottle"].dispsal[key].text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="material-info">
                            <h1 className="result-h1">Material Info</h1>
                            <div className="material-info-content">
                                {
                                    Object.keys(ItemInfo["Plastic Bottle"].additionalInfo).map((key) => {
                                        if (ItemInfo["Plastic Bottle"].additionalInfo[key].type === 'text') {
                                            return (
                                                <div className="material-info-text" key={key}>
                                                    <p className="material-info-p">{ItemInfo["Plastic Bottle"].additionalInfo[key].text}</p>
                                                </div>
                                            )
                                        } else if (ItemInfo["Plastic Bottle"].additionalInfo[key].type === 'image') {
                                            return (
                                                <div className="material-info-image" key={key}>
                                                    <img src={ItemInfo["Plastic Bottle"].additionalInfo[key].src}
                                                         alt={ItemInfo["Plastic Bottle"].additionalInfo[key].alt}/>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Result;
