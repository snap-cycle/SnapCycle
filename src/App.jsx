import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Demo from './pages/Demo';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar/>
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                        <Route path='/team' element={<Team/>} />
                        <Route path='/demo' element={<Demo/>} />
                    </Routes>
                <Footer/>
            </Router>
        </div>
    );
}
  
export default App;