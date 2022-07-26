import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 - Rotas Dinamicas
    const { id } = useParams();

    const url = 'http://localhost:3000/products/' + id;

    const { data: product, loading, error } = useFetch(url)
    return (
        <>
            <p>ID do produto é {id}</p>
            {error && { error }}
            {loading && <p>CARREGANDO</p>}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <span>{product.price}</span>
                    <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
                </div>
            )}

        </>
    );
}

export default Product
