import React from 'react';
import Slider from 'infinite-react-carousel';

const SliderTemplate = ({content}) => (
    <Slider arrowsBlock={false} pauseOnHover={false} autoplay autoplayScroll={1} autoplaySpeed={3000}>
        {
            Object.keys(content).map((key) => {
                return (
                    <img className="result-page-background" src={content[key].image} alt="result-background"/>
                )
            })
        }
    </Slider>
);

export default SliderTemplate;
