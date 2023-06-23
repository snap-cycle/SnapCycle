import '../styles/Home.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import blacklogo from '../assets/blacklogo.png'
import {Link} from 'react-router-dom';
import Webcam from 'react-webcam';

const Demo = () => {
  return (
    <div className='Home'>
      <Parallax pages={2.5} style={{ top: '0', left: '0' }} class="animation">
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
            Demo
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
        <ParallaxLayer offset={1.6} speed={0.0}>
          <Webcam className='webcam'/>
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={0.0}>
          <Link to="/bottle">
            <button className='button-30' role="button">Take a snap!</button>
          </Link>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
  
export default Demo;