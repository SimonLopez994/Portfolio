import Skills from "../../sections/skills/skills.component";
import './skills-item.styles.scss'


const SkillsItem = ({className, image, text }) => {
    return (
        
            <div className='skill__content'>
                <img className={`skill__img--${className}`} src={image} alt="lenguage" />
                <h5 className="skill__h5">{text}</h5>
            </div>

       
    )
}
export default SkillsItem