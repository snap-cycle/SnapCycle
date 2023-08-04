import {useRef} from "react";
import {useInView} from "framer-motion";
import "../styles/animations/InViewAnimation.css";

const SlideIn = ({ children, invert, vertical }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section ref={ref}>
            <span
                style={{
                    // Distance and duration are not controlled by props
                    // default vertical is top to bottom, default horizontal is left to right
                    transform: vertical ?
                        isInView ? "none" : "translateY(" + (invert === true ? 3 : -3) + "vh)" :
                        isInView ? "none" : "translateX(" + (invert === true ? 100 : -100) + "vw)",
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
