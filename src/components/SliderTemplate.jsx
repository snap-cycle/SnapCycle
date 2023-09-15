import React from 'react';
import Slider from 'infinite-react-carousel';
import '../styles/components/SliderTemplate.css';

const SliderTemplate = ({content, title, item}) => (
    <div className="slider-container">
        <Slider arrowsBlock={false} pauseOnHover={false} autoplay autoplayScroll={1} autoplaySpeed={3000}>
            {
                Object.keys(content).map((key) => {
                    return (
                        <img className="result-page-background" src={content[key].image} alt="result-background"/>
                    )
                })
            }
        </Slider>
        {
            title ?
                <div className="slider-title">
                    <h1>You have detected</h1>
                    <h1>{item}</h1>
                </div>
                :
                null
        }
    </div>
);

export default SliderTemplate;
