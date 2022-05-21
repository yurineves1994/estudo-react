const CarDetails = ({id, brand, km, color, usado}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>ID: {id}</li>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {usado === true ? (<li>É NOVO</li>) : (<li>É VELHO</li>)}
        </ul>
    </div>
  )
}

export default CarDetails