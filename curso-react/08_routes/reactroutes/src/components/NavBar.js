import '../components/NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            {/**<Link to="/">HOME</Link >
            <Link to="/about">SOBRE</Link >*/}
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">SOBRE</NavLink>
        </nav>
    )
}

export default NavBar