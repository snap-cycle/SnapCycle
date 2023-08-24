import {motion, useInView} from "framer-motion";
import '../styles/Home/Home.css';
import '../styles/Home/PanelLanding.css';
import '../styles/Home/PanelOne.css';
import '../styles/Home/PanelTwo.css';
import '../styles/Home/PanelThree.css';
import '../styles/Home/PanelFour.css';
import '../styles/Home/PanelFive.css';

const AnimateDiv = ({ children, delay = 0, down = false}) => {

    return (
        <motion.div 
            initial={{ opacity: 0, y: (down) ? -50 : 50 }} 
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateDiv;