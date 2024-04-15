import { useRef } from "react";
import ProjectCard from "../../components/project-card/project-card.component";
import './projects.styles.scss';
import caravan from '../../images/caravan.png';
import crypto from '../../images/crypto.png';
import clothing from '../../images/crwn-clothing.png'
import react from '../../images/react.png';
import css from '../../images/css.png';
import html from '../../images/html.png';
import sass from '../../images/sass.png';
import js from '../../images/js.png';
import GSAP from '../../images/gsap.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const cardsArray = [
    {
        img: caravan,
        title: "Caravan Coffe Shop",
        paragraph: "This is a coffee shop website that I developed, featuring a fully responsive design. I also implemented a user registration form, with data stored in Firestore. Additionally, I created a menu and a shopping bag functionality, allowing users to view their product orders.",
        tech: [html, sass, js, react]
        
    },
    {
        img: crypto,
        title: "Crypto currency",
        paragraph: "This is a crypto currency app, featuring a fully responsive design, where i had to fetch the data form a crypto API,also have an user registration form,with the registration stored  in Firestore",
        tech: [html, sass, js, react],
        URL: 'https://crypto-4dd98.firebaseapp.com'
    },
    {
        img: clothing,
        title: "Crwn Clothing",
        paragraph: "This is a clothing shop website that I developed, featuring a fully responsive design, and using styled Components. I also implemented a user registration form, with data stored in Firestore. Additionally, I created a menu and a shopping bag functionality, allowing users to view their product orders.",
        tech: [html, sass, js, react]
    },

];



const Projects = () => {


    const ProjectsContainerRef = useRef();
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to(".projects__container", {
            x: 0,
            duration: 2,
            opacity: 1,

            scrollTrigger: {
                trigger: ProjectsContainerRef.current,
                start: 'top center',
                end: '10% 20%',
                scrub: 1,
                stagger: true,

            }
        });
    });


    return (
        <div className="projects__container" ref={ProjectsContainerRef}>
            <h3 className="projects__container--title">Featured projects</h3>
            <div className="projects__content">

                {cardsArray.map((card, index) => (
                    <ProjectCard key={index} img={card.img} title={card.title} paragraph={card.paragraph} tech={card.tech || []} URL={card.URL} />
                ))}
            </div>

        </div>
    );
};
export default Projects;