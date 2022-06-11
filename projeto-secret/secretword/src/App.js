// CSS
import './App.css';

//REACT
import { useCallback, useEffect, useState } from 'react'

//data
import { wordsList } from './data/words'

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name) // estagio do jogo
  const [words] = useState(wordsList) // dados do jogo

  const [pickedWord, setPickedWord] = useState("") // palavra a ser adivinhada
  const [pickedCategory, setPickedCategory] = useState("") // categoria da palavra a ser adivinhada
  const [letters, setLetters] = useState([]) // letras da palavra a ser adivinhada

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words) // pega as categorias disponiveis
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; // sorteia a categoria

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)] // de acordo com a categoria sorteia a palavra

    return { word, category }
  }, [words])

  // starts the secret word
  const startGame = useCallback(() => {

    //limpar states jogo
    clearLetterStates()

    // pick word and pick category 
    const { word, category } = pickWordAndCategory()

    // create an array letter
    let wordLetter = word.split("") // separa das letras da palavra 
    wordLetter = wordLetter.map(letter => letter.toLowerCase()) // transforma as letras todas em letra minuscula 

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetter)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  //process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    //check se a letra digitada já foi utilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // incluir letra digitada no array de letras acertadas ou erradas
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetter) => [
        ...actualGuessedLetter, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetter) => [
        ...actualWrongLetter, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }

  };

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses <= 0) {
      //resetar todas as configurações iniciais
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => actualScore += 100)

      //recomeçar jogo em um novo level
      startGame()
    }

  }, [guessedLetters, startGame, letters])

  const retry = () => {
    setScore(0);
    setGuesses(3)

    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
