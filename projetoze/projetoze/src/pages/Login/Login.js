import styles from './Login.module.css'

import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useSession } from '../../hooks/useSession'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const { data: logins, loading } = useFetch('http://localhost:3000/login')

    const { dispatch } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()

        const usuario = logins.find(item => item.login === email && item.password === password)

        if (usuario) {
            dispatch({ type: "LOGADO", payload: usuario.name })
        } else {
            dispatch({ type: "DESLOGADO" })
        }

        setEmail("")
        setPassword("")
    }

    return (
        <div className={styles.register}>
            <h2>Cadastra-se</h2>
            <p>Crie seu usuario e conte a sua historia!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='E-mail do usuario' />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Senha do usuario' />
                </label>
                {loading && <button className="btn" disabled>Carregando</button>}
                {!loading && <button className="btn">Entrar</button>}
            </form>
        </div>
    )
}

export default Login