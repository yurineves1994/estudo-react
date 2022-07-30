import styles from './Register.module.css';

import { useEffect, useState } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [displayName, setDisplayName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError('A senha e o confirmar senha devem ser iguais.')
            return;
        }

        const res = await createUser(user)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }

    }, [authError])

    return (
        <div className={styles.register}>
            <h2>Cadastra-se</h2>
            <p>Crie seu usuario e conte a sua historia!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required placeholder='Nome do usuario' />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='E-mail do usuario' />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Digite sua senha' />
                </label>
                <label>
                    <span>Confirmar Senha:</span>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder='Confirme sua senha' />
                </label>
                {error && <p className='error'>{error}</p>}
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn">Aguarde...</button>}
            </form>
        </div>
    )
}

export default Register