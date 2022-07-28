import styles from './Register.module.css';

import { useStete, useEffect, useState } from 'react'

const Register = () => {
    const [displayName, setDisplayName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password,
            confirmPassword
        }

        if (password !== confirmPassword) {
            setError('A senha e o confirmar senha devem ser iguais.')
            return;
        }

    }

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
                <button className="btn">Cadastrar</button>
            </form>
        </div>
    )
}

export default Register