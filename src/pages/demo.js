import Webcam from 'react-webcam';
import React from 'react';
import './items.css';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div>
      <h1>Test it out</h1>
      <Webcam className='webcam'/>
      <Link to="/bottle">
        <button className='button-30' role="button">Take a snap!</button>
      </Link>
    </div>  
  );
};
  
export default Demo;