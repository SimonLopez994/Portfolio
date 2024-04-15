import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from '../button/button.component';
import './banner.styles.scss';
import { useContext, useRef } from 'react';
import { ScrollRefContext } from '../../contexts/scroll.context';





const Banner = () => {

    const { BannerRef } = useContext(ScrollRefContext)


    const container = useRef()
    const h4 = useRef()
    const title = useRef()
    const btn = useRef()
    const tl = useRef()
    const chevronIcon = useRef()


    useGSAP(() => {
        tl.current = gsap.timeline()

            .to(chevronIcon.current, {
                y: -200,
                duration: 0.9,
                repeat: -1,
                yoyo: true,
                
            })


            .to(".down", { x: 0, opacity: 1, duration: 0.4 })

            .to(".title", { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
    }, { scope: container })


    const scrollToDown = () => {
        window.scrollTo({
          top: window.pageYOffset + 110 * window.innerHeight / 100, // Desplaza hacia abajo 20% del tamaño de la ventana
          behavior: 'smooth', 
        
        });
      };



    return (
        <div className='banner__container'>

            <div className='banner__content' ref={container}>
                <h4 className='banner__h4 down' >I'am a</h4>
                <h1 className='banner__h1 title' ref={title}>Front-End Web developer<span className='banner__span'></span></h1>
                <div className='banner__btns'>
                <Button children='My Projects' className='banner__btn down' />
                <a href="https://github.com/SimonLopez994" target='_blank'>
                <svg className='banner__icon--git' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                </a>    
                </div>
            </div>


            <div className='banner__icon--container'>
                <div className='banner__icon--content'>
                    <span className='banner__iconText'>my knowledge</span>
                    <svg height="3rem" xmlns="http://www.w3.org/2000/svg" className='banner__chevronIcon' viewBox="0 0 512 512"><path onClick={scrollToDown} ref={chevronIcon} d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" /></svg>
                </div>


            </div>

        </div>

    )
}
export default Banner;