import { NavLink } from "react-router-dom";

import styles from './NavBar.module.css';

const NavBar = () => {
    return <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>HOME</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>ENTRAR</NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : '')}>CADASTRAR-SE</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>SOBRE</NavLink>
            </li>

        </ul>
    </nav>
}

export default NavBar