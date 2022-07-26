import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
    // Controled Input

    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("")

    /** IMPORTANTE CRIAR UM FUNÇÃO PARA SETAR OS VALORES CASO QUEIRA FAZER ALGUMA VALIDADEÇÃO
     *  OU QUERIA FAZER ALGUMA ALTERAÇÃO ANTES DE SETAR O NOVO VALOR A VARIAVEL, DAR PREFERENCIA
     *  PARA CRIAR UM FUNÇÃO E NÃO FAZER INLINE
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando Formulario")
        console.log(name, email, bio, role)

        setName("")

        setEmail("")
        setBio("")
        setRole("")
    }

    return (
        <div>
            {/** 5 - Envio de form */}
            {/** 1 - Criação de Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                {/** Label envolvendo Input (NO CASO O VALOR ESTÁ SENDO SETADO DIRETAMENTE, SEM USO DE UMA FUNÇÃO) */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                {/** 8 - textarea */}
                <label>
                    <span>BIO</span>
                    <textarea name="bio" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <label>
                    <span>Função no Sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuario</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm