import './home.css'
import Reacts from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from '../textblock';
import blacklogo from '../resources/blacklogo.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Bottle = () => {
  return (
    <div className='Home'>
    <Parallax pages={2.0} style={{ top: '0', left: '0' }} class="animation">
      <ParallaxLayer sticky={{start:0.0, end:2.5}} className=''>
        <Navbar/>

      </ParallaxLayer>

      <ParallaxLayer offset={0.4} speed={0.1} className='whiteBack'>
        <div class="animation_layer parallax" id="white">
          It Is Recyclable!
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} speed={-0.7}>
        <div class="animation_layer parallax" id="rightwaterbottle"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.0} speed={0.1} className='blackBack'>
        <div>
        <div class="animation_layer parallax" className='blackBack' id="">
          <br/>Information:
          </div>
          <div class="animation_layer parallax" className='resultContent' id=""><br/>Item: Plastic Bottle<br/>Material: Plastic<br/>Recyclable: Yes
          </div>
          <div class="animation_layer parallax" className='blackBack' id="">
          <br/>Not so fun facts:
          </div>

          <div class="animation_layer parallax" className='resultContent' id="">

          <br/>450: Years for a plastic bottle to decompose
          <br/>60M: Plastic bottles are used everyday
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  </div>
  );
};
  
export default Bottle;