import '../styles/Home.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import HomeInfo from '../components/HomeInfo';
import blacklogo from '../assets/BlackLogo.png'
import Navbar from '../components/Navbar';

const Home = () => {
   return (
    <div className='Home'>  
      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">
      <ParallaxLayer sticky={{start:0.0, end:3.0}}>
      <Navbar/>

        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.25}>
          <div className="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.1}>
          <div className="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div className="animation_layer parallax" id="">
            <img className="centerlogo" src={blacklogo} alt="Black Logo"/>
            <br/>
            SnapCycle
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.1}>
          <div className="animation_layer parallax" id="mountain2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <div className="animation_layer parallax" id="mountain3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.5}>
          <div className="animation_layer parallax" id="back"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={-0.1}>
          <div className="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.40}>
          <div className="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.35}>
          <div className="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.25}>
          <HomeInfo />
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={0.0}>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
};
  
export default Home;