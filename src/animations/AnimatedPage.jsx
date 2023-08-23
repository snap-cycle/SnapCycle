import {motion} from "framer-motion";

const AnimatedPage = ({ children, y=-20, duration=0.7, delay=0 }) => {
    const animations = {
        initial: { y: y, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

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