import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
const Home = () => {



    return (
        <div>
            <Navbar/>
            <div className="Panel">
                <h1>Home</h1>
            </div>
            <div className="Panel">
                Panel 1
            </div>
            <div className="Panel">
                Panel 2
            </div>
            <div className="Panel">
                Panel 3
            </div>
        </div>
    )
}

export default Home;