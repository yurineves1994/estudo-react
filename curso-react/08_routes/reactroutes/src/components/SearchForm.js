import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubit = (e) => {
        e.preventDefault()

        navigate('/search?q=' + query)
    }
    return (
        <form onSubmit={handleSubit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default SearchForm