import React from 'react'
import { useState } from 'react'

export default function ComponentsState() {
const [numero, setNumero] = useState(10)

  return (
    <div>
        <p>{numero}</p>
        <button onClick={() => setNumero(numero + 10)}>Clique aqui</button>
    </div>
    
  )
}
