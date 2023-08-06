import React, {useState, useEffect} from "react";
import CountUp from "react-countup";
import '../styles/components/Statistics.css';

const Statistics = ({ statistics }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const semiRowBreakpoint = 1150;
    const columnBreakpoint = 750;
    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    // StatisticsRow is used for one row of statistics or one column. This will switch accordingly
    if (windowWidth > semiRowBreakpoint || windowWidth <= columnBreakpoint) {
        return <StatisticsRow statistics={statistics}/>
    }
    // StatisticsSemiRow is used for two rows of two statistics.
    else {
        return <StatisticsSemiRow statistics={statistics}/>
    }
}

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

const StatisticsSemiRow = ({ statistics}) => {

    return (
        <div>

        </div>
    )
}

export default Statistics;
