import {motion} from "framer-motion";
import {useEffect} from "react";

const animations = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const AnimatedPage = ({ children }) => {
    // Scrolls to top of page on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;