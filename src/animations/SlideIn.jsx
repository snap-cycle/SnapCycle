import { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/InViewAnimation.css";

const SlideIn = ({ children, direction }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    let distance = 0;
    if (direction === "left") {
        distance = -1920;
    }
    else if (direction === "right") {
        distance = 1920;
    }

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(" + distance +"px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
                }}
            >
            {children}
            </span>
        </section>
    );
}

export default SlideIn;
