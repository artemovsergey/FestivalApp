import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'

export const Header = () => {
    return(
        <header>

            <Link to="/"><img src={logo} alt="logo" height={24} /></Link>
            
            {/* <span className="logo"> Logo </span> */}

            <ul className="menu">
                <li> <NavLink title="Авторизация" to="/auth" >Авторизация</NavLink>  </li>
                <li> <NavLink title="Регистрация" to="/sign">Регистрация</NavLink>  </li>
                <li> <NavLink title="Участники" to="/users">Участники</NavLink>  </li>
            </ul>

        </header>
    )
}