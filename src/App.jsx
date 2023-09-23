import React, { useEffect } from 'react';
import './styles/App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Demo from './pages/Demo';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {AnimatePresence} from "framer-motion";
import Contact from "./pages/Contact";
import Result from "./pages/Result";

function App() {
    useEffect(() => {
        // Load Roboflow script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://cdn.roboflow.com/0.2.26/roboflow.js';
        document.body.appendChild(script);

        script.onload = () => {
            console.log('Script has been loaded');
        };

        return () => {
            document.body.removeChild(script);
        }
    }, []); 

    return (
        <div className='App'>
            <AnimatePresence mode='wait'>
                <Router basename="/">
                    <Navbar/>
                        <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/team' element={<Team/>} />
                            <Route path='/demo' element={<Demo/>} />
                            <Route path='/result' element={<Result/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                        </Routes>
                    <Footer/>
                </Router>
            </AnimatePresence>
        </div>
    );
}
  
export default App;
