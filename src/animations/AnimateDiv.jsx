import {React, useRef, Children} from "react";
import {motion, useInView} from "framer-motion";
import '../styles/Home/Home.css';
import '../styles/Home/PanelLanding.css';
import '../styles/Home/PanelOne.css';
import '../styles/Home/PanelTwo.css';
import '../styles/Home/PanelThree.css';
import '../styles/Home/PanelFour.css';
import '../styles/Home/PanelFive.css';

const AnimateDiv = ({ children, className, id, down = false, childrenDelay = false}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    // Animating one div
    if (!childrenDelay) return (
        <motion.div 
            initial={{ opacity: 0, y: (down) ? -50 : 50 }} 
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
            <div className={`${className}`} id={`${id}`}>
                {children}
            </div>
        </motion.div>
    );

    // Animating a div with animated children elements that each have an incrementing delay
    else return (
        <div className={`${className}`} id={`${id}`} ref={ref}>
            {Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: (down) ? -50 : 50 }}
                    animate={ isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.2, ease: "easeOut" }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
};

export default AnimateDiv;