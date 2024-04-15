import './button.styles.scss'
import '../banner/banner.styles.scss'
const Button = ({children, otherProps, className}) => {
    return(
        <button className={`btn ${className} `}{...otherProps}>{children}</button>
    )
}
export default Button