import React, {useEffect, useRef} from "react";
import '../styles/components/Ticker.css';

const Ticker = ({items, invert}) => {
    const ref = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const horizontalScroll = scrollY / 20; // Adjust the divisor to control the movement speed
        invert ? ref.current.style.transform = `translateX(${horizontalScroll}px)`: ref.current.style.transform = `translateX(${-horizontalScroll}px)`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='ItemRow' ref={ref}>
            {
                items.map((item, index) => (
                    <img src={item.src} key={index} alt={item.name} className="Item"/>
                ))
            }
        </div>
    )
}

export default Ticker;
