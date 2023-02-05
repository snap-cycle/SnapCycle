import './home.css'
import Reacts from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from '../textblock';
import blacklogo from '../resources/blacklogo.png'

const Home = () => {
   return (
    <div className='Home'>
      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0.4} speed={0.25}>
          <div class="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.1}>
          <div class="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div class="animation_layer parallax" id="">
            <img className="centerlogo" src={blacklogo}/>
            <br/>
            SnapCycle
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.1}>
          <div class="animation_layer parallax" id="mountain2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <div class="animation_layer parallax" id="mountain3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.5}>
          <div class="animation_layer parallax" id="back"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={-0.1}>
          <div class="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.40}>
          <div class="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.35}>
          <div class="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
  
export default Home;