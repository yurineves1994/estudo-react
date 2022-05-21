import {useState} from 'react'

const ListRender = () => {
  const [list] = useState(['Mateus', 'Fernando', 'João' ]);
  return (
    <div>
        <ul>
            {list.map((item,index) => (<li key={index}>{item}</li>))}
        </ul>
    </div>
  )
}

export default ListRender