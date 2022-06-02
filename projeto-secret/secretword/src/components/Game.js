import './Game.css'
import { useState, useRef } from 'react'

function Game({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) {
    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(letter)

        setLetter("")

        letterInputRef.current.focus()
    }
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinha a palavra:</h1>
            <h3 className="tip">
                Dica da palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativas</p>
            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span className="letter">{letter}</span>
                    ) : (
                        <span keys={i} className="blankSquare"></span>
                    )
                ))}
            </div>
            <div className="letterContainer">
                <p>Tente adivinha um letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="letter" maxLength="1" required value={letter} onChange={(e) => setLetter(e.target.value)} ref={letterInputRef} />
                    <button>Enviar</button>
                </form>
            </div>
            <div className="wrongLetterContainer">
                <p>Letras já utilizadas:</p>
                {guessedLetters.map((letter, i) => (
                    <span key={i}>{letter}</span>
                ))}
            </div>
        </div >
    )
}

export default Game