import { useFetch } from '../hooks/useFetch'
import '../pages/About.css';

const About = () => {
    const { data } = useFetch('http://localhost:3000/products')
    return (
        <div>

        </div>
    )
}

export default About