import { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/InViewAnimation.css";

const SlideIn = ({ children, invert }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section ref={ref}>
            <span
                style={{
                    // default is to slide in from left to RIGHT
                    transform: isInView ? "none" : "translateX(" + (invert === true ? 100 : -100) +"vw)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1)"
                }}
            >
            {children}
            </span>
        </section>
    );
}

export default SlideIn;
