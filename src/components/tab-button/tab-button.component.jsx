import { useEffect, useRef } from "react";
import gsap from "gsap";
import './tab-button.styles.scss'

const TabButton = ({name , ...otherProps }) => {
   return(
    <button className="tab__btn" {...otherProps}>{name}</button>
   )
}
export default TabButton;