import './skills.styles.scss';
import React, { useContext, useRef, useEffect } from 'react';
import react from '../../images/react.png';
import css from '../../images/css.png';
import html from '../../images/html.png';
import sass from '../../images/sass.png';
import js from '../../images/js.png';
import GSAP from '../../images/gsap.png';
import SkillsItem from '../../components/skills-item/skills-item.component';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { ScrollRefContext } from '../../contexts/scroll.context';

const Skills = () => {
  const { setBannerRef } = useContext(ScrollRefContext);
  const SkillsRef = useRef();

  useEffect(() => {
    setBannerRef(SkillsRef.current)
  }, [])

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    gsap.to(SkillsRef.current, {
      y: 0,
      opacity: 1,
      duration: 5,

      scrollTrigger: {
        trigger: SkillsRef.current,
        start: "top bottom",
        end: "top bottom",
        scrub: 3,

      }


    });


  });
  useGSAP(() => {
    gsap.to(SkillsRef.current.querySelector('.skills__span'), { // Selecciona .skills__span dentro del ref
      width: "60%",
      duration: 5,
      delay: 2,
      scrollTrigger: {
        trigger: SkillsRef.current,
        start: "5% center",
        end: "5% bottom",
        scrub: 3
      }
    })
  })

  return (

    <div className="skills__container" ref={SkillsRef}>
      <h2 className="skills__h2">About me</h2>
      <div className='skills__about'>
        <h3 className='skills__h3'>Interests:</h3>
        <p className='skills__p'>Hello, I'm Simon Lopez, an experienced web developer with a pragmatic approach to creating effective digital solutions. I enjoy exploring and learning about new technologies while working on challenging projects. With an intermediate level of English, I am capable of engaging in conversations and effectively communicating in English,i also know how to use github.
          In addition to my technical expertise, I also have an interest in web design and user experience UX, allowing me to create functional and user-friendly websites.
        </p>
        <p className='skills__p--english'>Intermediate English level</p>
        <div className='skills__container--span'><span className='skills__span'></span></div>

      </div>
      <div className='skills__grids'>
        <h3 className='skills__h3'>Skills:</h3>
        <div className='skills__grid--1'>
          <SkillsItem className='react' text='React' image={react} />
          <SkillsItem className='css' text='Css' image={css} />
          <SkillsItem className='html' text='Html' image={html} />

        </div>
        <div className='skills__grid--2'>
          <SkillsItem className='sass' text='Sass' image={sass} />
          <SkillsItem className='gsap' text='GSAP' image={GSAP} />
          <SkillsItem className='js' text='Js' image={js} />

        </div>
      </div>

    </div>


  );
}

export default Skills;
