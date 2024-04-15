import React, { useEffect, useRef } from 'react';
import './App.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../src/sections/navigation/navigation.component';
import Banner from '../src/components/banner/banner.component';
import Skills from '../src/sections/skills/skills.component';
import Projects from './sections/projects/projects.component';


const App = () => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".app", {
      backgroundColor: 'rgba(0, 1, 15, 0.9)',
      duration: 0.5,
      scrollTrigger: {
        trigger: ".app",
        start: '10%',
        end: '40%',
        scrub: 1,
       


     // Esto es solo para depuración, quítalo en producción

      }
    });

  }, []);

  return (
    <div className='app__container'>
      
      <div className='app'>

        
        <Banner />
        <Skills />
        <Projects/>
      </div>
    </div>

  );
}

export default App;