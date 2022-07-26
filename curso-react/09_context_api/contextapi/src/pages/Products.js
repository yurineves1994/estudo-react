import { useContext } from "react"

import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

const Products = () => {
    const { counter } = useContext(CounterContext)

    return (
        <div>
            Products
            <h1>{counter}</h1>
            <ChangeCounter />
        </div>
    )
}

export default Products