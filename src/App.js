import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import Demo from './pages/demo';  
import Bottle from './pages/bottle';
import Can from './pages/can';
import Phone from './pages/phone';
function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/demo' element={<Demo/>} />
        <Route path='/bottle' element={<Bottle/>} />
        <Route path='/can' element={<Can/>} />
        <Route path='/phone' element={<Phone/>} />
      </Routes>
    </Router>
    </div>
  );
}
  
export default App;