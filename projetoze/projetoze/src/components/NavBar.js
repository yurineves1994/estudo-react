import styles from './NavBar.module.css'

import { NavLink } from 'react-router-dom'

import { useSession } from '../hooks/useSession'
const NavBar = () => {
    const { logado, name_user } = useSession()

    return <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            PROJETO <span>DO ZÉ</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>HOME</NavLink>
            </li>
            <li>
                {logado && <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>SOBRE</NavLink>}
            </li>
            {!logado && <li><NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>LOGIN</NavLink> </li>}
            {logado && <div className={styles.user}>Bem vindo, {name_user}</div>}

        </ul>
    </nav>

}

export default NavBar