import React from 'react';
import Slider from 'infinite-react-carousel';
import '../styles/components/SliderTemplate.css';

const SliderTemplate = ({content, title, item, method}) => (
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
                <div className="slider-overlay">
                    <p className="slider-subtitle">You have detected</p>
                    <p className="slider-title">{item}</p>
                    <p className="slider-subtitle">Disposal Method</p>
                    <p className="slider-title">{method}</p>
                </div>
                :
                null
        }
    </div>
);

export default SliderTemplate;
