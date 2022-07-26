import { NavLink } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'

const NavBar = () => {
    return (
        <div>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>SOBRE</NavLink>
            <NavLink to='/products'>PRODUTOS</NavLink>
        </div>
    )
}

export default NavBar