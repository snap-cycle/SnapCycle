import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import Demo from './pages/demo';  

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
    </Router>
    </div>
  );
}
  
export default App;