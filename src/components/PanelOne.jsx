import Ticker from "./Ticker";
import {TickerData} from "../data/TickerData";
import React from "react";
import '../styles/Home/PanelOne.css';

const PanelOne = () => {

    return <div className="PanelOne">
        <div className='Title'>
            Hundreds of Objects<br></br>
            to Detect From, That<br></br>
            Help You Recycle
        </div>
        <div className='ItemCategories'>
            <Ticker items={TickerData.tickerItems1}/>
            <Ticker items={TickerData.tickerItems2} invert={true}/>
        </div>
    </div>;
}

export default PanelOne;
