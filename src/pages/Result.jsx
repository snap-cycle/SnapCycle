import React from 'react';
import '../styles/pages/Result.css';
import { ItemInfo } from '../Info/ItemInfo.jsx';
import SliderTemplate from "../components/SliderTemplate";
import { useParams } from 'react-router-dom';

const Result = ({selectedItem, selectedDisposalMethod}) => {
    const { item } = useParams();
    let disposalMethod = ItemInfo[item].disposalMethod;
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
                <div className="MaterialInfoContainer">
                    <div className="MaterialInfoColumn" id="ColumnLeft">
                        <div className='TextLeft'>{ItemInfo[item].additionalInfo["1"].text}</div>
                        <img src={ItemInfo[item].additionalInfo["2"].src} alt={ItemInfo[item].additionalInfo["2"].alt}/>
                    </div>
                    <div className="MaterialInfoColumn" id="ColumnRight">
                        <img src={ItemInfo[item].additionalInfo["3"].src} alt={ItemInfo[item].additionalInfo["3"].alt}/>
                        <div className='TextRight'>{ItemInfo[item].additionalInfo["4"].text}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;
