import {useState} from 'react'

const RenderizarCondicional = () => {
    const [x, setX] = useState(true)
    const [name, setName] = useState('Fabricio')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for VERDADEIRO, sim</p>}
            {!x && <p>Se x for FALSO, sim</p>}
            <button onClick={() => setX(true)}>Verdadeiro</button>
            <button onClick={() => setX(false)}>Falso</button>

            {name == 'João' ? (
                <p>Sim, o nome é João</p>
            ) : (
                <p>Não, o nome é {name}</p>
            )}
        </div>
    )
}

export default RenderizarCondicional