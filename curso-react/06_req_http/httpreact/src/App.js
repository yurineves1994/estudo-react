import './App.css';

import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from './hooks/useFetch'


const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4- custom hook
  const { data: items, httpConfig, loading } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados
  //useEffect(() => {
  //async function fecthData() {
  //const res = await fetch(url);
  //const data = await res.json();
  //setProducts(data);

  // }
  //fecthData();
  // }, []);

  // 2 - adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name: name,
      price: price
    }

    /*const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })

    // 3 - Carregamento dinamico
    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])*/

    // 5 - refatorando o post
    httpConfig(product, "POST")

    setName("")
    setPrice("")

  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando os dados...</p>}
      {!loading && <ul>
        {items && items.map((product, i) =>
          (<li key={i}>{product.name} - R$ {product.price}</li>))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;
