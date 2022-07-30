import styles from './Login.module.css'

import { useEffect, useState } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const { login, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            email,
            password
        }

        const res = await login(user)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }

    }, [authError])

    return (
        <div className={styles.login}>
            <h2>Entrar</h2>
            <p>Faço o login e utilize o sistema!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='E-mail do usuario' />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Digite sua senha' />
                </label>
                {error && <p className='error'>{error}</p>}
                {!loading && <button className="btn">Entrar</button>}
                {loading && <button className="btn">Aguarde...</button>}
            </form>
        </div>
    )
}

export default Login