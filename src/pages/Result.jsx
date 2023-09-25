import React from 'react';
import '../styles/pages/Result.css';
import { ItemInfo } from '../Info/ItemInfo.jsx';
import SliderTemplate from "../components/SliderTemplate";

const Result = ({selectedItem, selectedDisposalMethod}) => {
    let item = "Plastic Bottle"
    let disposalMethod = "Recycle"
    return (
        <div className="ResultPanel">
            <SliderTemplate content={ItemInfo[item].backgrounds} title={true} item={item} method={disposalMethod}/>
            <div className='ResultInfoContainer'>
                <div className='Title'>
                    Disposal Methods
                </div>
                <div className="DisposalProcessContainer">
                    {
                        Object.keys(ItemInfo[item].dispsal).map((key) => {
                            return (
                                <div className="DisposalStep" key={key}>
                                    <h1 className="DisposalStepTitle">{key}</h1>
                                    <img className="DisposalStepImage" src={ItemInfo[item].dispsal[key].image} alt=""/>
                                    <p className="DisposalStepText">{ItemInfo[item].dispsal[key].text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='Title'>
                    Material Info
                </div>
            </div>
            <div className="result-disposal-methods">
                <div className="material-info">
                    <h1 className="result-h1">Material Info</h1>
                    <div className="material-info-content">
                        <div className="material-info-content-column">
                            <div>{ItemInfo[item].additionalInfo["1"].text}</div>
                            <img src={ItemInfo[item].additionalInfo["2"].src} alt={ItemInfo[item].additionalInfo["2"].alt}/>
                        </div>
                        <div className="material-info-content-column">
                            <img src={ItemInfo[item].additionalInfo["3"].src} alt={ItemInfo[item].additionalInfo["3"].alt}/>
                            <div>{ItemInfo[item].additionalInfo["4"].text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Old = ({selectedItem, selectedDisposalMethod}) => {
    let item = "Plastic Bottle"
    let disposalMethod = "Recycle"
    return (
        <div className="result-page">
            <SliderTemplate content={ItemInfo[item].backgrounds} title={true} item={item} method={disposalMethod}/>
            <div className="result-disposal-methods">
                <h1 className="result-h1">Disposal Methods</h1>
                <div className="disposal-process">
                    {
                        Object.keys(ItemInfo[item].dispsal).map((key) => {
                            return (
                                <div className="disposal-process-step" key={key}>
                                    <h1 className="result-h1">{key}</h1>
                                    <img className="disposal-method-image"
                                         src={ItemInfo[item].dispsal[key].image}
                                         alt="disposal-method"/>
                                    <p className="disposal-method-text">{ItemInfo[item].dispsal[key].text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="material-info">
                    <h1 className="result-h1">Material Info</h1>
                    <div className="material-info-content">
                        <div className="material-info-content-column">
                            <div>{ItemInfo[item].additionalInfo["1"].text}</div>
                            <img src={ItemInfo[item].additionalInfo["2"].src} alt={ItemInfo[item].additionalInfo["2"].alt}/>
                        </div>
                        <div className="material-info-content-column">
                            <img src={ItemInfo[item].additionalInfo["3"].src} alt={ItemInfo[item].additionalInfo["3"].alt}/>
                            <div>{ItemInfo[item].additionalInfo["4"].text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;
