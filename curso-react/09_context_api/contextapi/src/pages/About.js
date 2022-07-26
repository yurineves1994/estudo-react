import { useContext } from "react"

import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

const About = () => {
    const { counter } = useContext(CounterContext)
    return (
        <div>
            About
            <h1>{counter}</h1>
            <ChangeCounter />
        </div>
    )
}

export default About