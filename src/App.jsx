import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Demo from './pages/Demo';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import AppLoadAnimation from "./animations/AppLoadAnimation";
function App({pages}) {

    return (
        <div className='App'>
            <AppLoadAnimation/>
            <AnimatePresence mode='wait'>
                <Router>
                    <Navbar pages={pages}/>
                        <Routes>
                            <Route path='/home' element={<Home/>} />
                            <Route path='/team' element={<Team/>} />
                            <Route path='/demo' element={<Demo/>} />
                        </Routes>
                    <Footer pages={pages}/>
                </Router>
            </AnimatePresence>
        </div>
    );
}
  
export default App;