import CountUp from "react-countup";
import React from "react";
import '../styles/components/Statistics.css';

const StatisticsRow = ({ statistics }) => {

    return (
        <div className='StatisticsContainer'>
            {
                statistics.map((statistic) => (
                    <div className='Statistic'>
                        <div className='Title'>
                            <CountUp end={statistic.value} suffix={statistic.suffix} enableScrollSpy={true}/>
                        </div>
                        <div className='StatisticSubText' id={statistic.name}>
                            {statistic.subtext}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default StatisticsRow;
