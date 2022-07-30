import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from '../context/AuthContext'

import styles from './NavBar.module.css';

const NavBar = () => {
    const { user } = useAuthValue()
    const { logout } = useAuthentication()

    return <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>HOME</NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>ENTRAR</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : '')}>CADASTRAR-SE</NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink to="/post/create" className={({ isActive }) => (isActive ? styles.active : '')}>CRIAR POSTAGEM</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>DASHBOARD</NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>SOBRE</NavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>SAIR</button>
                </li>
            )}
        </ul>
    </nav>
}

export default NavBar