import ChangeCounter from '../components/ChangeCounter'

import { useCounterContext } from '../hooks/useCounterContext'

import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
    const { counter } = useCounterContext()

    const { color, dispatch } = useTitleColorContext()


    const setTitleColor = (color) => {
        dispatch({ type: color })
    }
    return (
        <div>
            <h1 style={{ color: color }}>esse é o valor {counter}</h1>
            <ChangeCounter />
            <div>
                <button onClick={() => setTitleColor("RED")}>RED</button>
                <button onClick={() => setTitleColor("BLUE")}>BLUE</button>
            </div>
        </div>
    )
}

export default Home