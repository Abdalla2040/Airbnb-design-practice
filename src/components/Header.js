import './header.css'
import Logo from '../images/Logo.svg'

export default function Header(){
    return(
        <header>
            <div className="header-container">
                <img src={Logo} alt="logo" className="logo"/>
            </div>
        </header>
    )
}