import '../pages/Home.css'

import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
    const { data: items, loading, error } = useFetch('http://localhost:3000/products')

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <p>CARREGANDO...</p>}
            <ul className='list'>
                {items && items.map(item => (
                    <li key={item.id} className='item'>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home