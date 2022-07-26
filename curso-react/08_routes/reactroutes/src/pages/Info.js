import { useParams } from "react-router-dom"

const Info = () => {
    const { id } = useParams()
    return (
        <div>
            <p>Abaixo as Informações referentes ao produto {id}</p>
        </div>
    )
}

export default Info