import React from 'react';
import Slider from 'infinite-react-carousel';
import '../styles/components/SliderTemplate.css';

const SliderTemplate = ({content}, title) => (
    <>
        <Slider arrowsBlock={false} pauseOnHover={false} autoplay autoplayScroll={1} autoplaySpeed={3000}>
            {
                Object.keys(content).map((key) => {
                    return (
                        <img className="result-page-background" src={content[key].image} alt="result-background"/>
                    )
                })
            }
        </Slider>
        {title ?
            <div className="banner">
                <div className="overlay"></div>
                <div className="overlay-header">Overlay</div>
            </div>
            :
            null}
    </>
);

export default SliderTemplate;
