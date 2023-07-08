import React from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Navbar from '../components/Navbar';

const Result = () => {
  return (
    <div className='Home'>
    <Parallax pages={2.0} style={{ top: '0', left: '0' }} class="animation">
      <ParallaxLayer sticky={{start:0.0, end:2.5}} className=''>
        <Navbar/>

      </ParallaxLayer>

      <ParallaxLayer offset={0.4} speed={0.1} className='whiteBack'>
        <div className="animation_layer parallax" id="white">
          It Is Recyclable!
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} speed={-0.7}>
        <div className="animation_layer parallax" id="rightwaterbottle"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.0} speed={0.1} className='blackBack'>
        <div>
        </div>
      </ParallaxLayer>

    </Parallax>
  </div>
  );
};
  
export default Result;