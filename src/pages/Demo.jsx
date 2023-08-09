import React from "react"
import "../styles/Demo.css"
import AnimatedPage from "../animations/AnimatedPage";

const Demo = () => {

    return (
        <AnimatedPage>
            <div className="min-h-screen flex flex-col justify-center items-center align-middle">
                <h1>Demo</h1>
                <p>Currently in development</p>
            </div>
        </AnimatedPage>
    )
}

export default Demo;
