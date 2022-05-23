import { useState } from 'react';
import './App.css';
import CarDetails from './components/CarDetails';
import ComponentsState from './components/ComponentsState';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import RenderizarCondicional from './components/RenderizarCondicional';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  //const name = "Yuri"
  const [idade] = useState(35)

  const cars = [{
    id: 1,
    brand: 'UNO',
    color: 'preto',
    km: 123456,
    usado: true
  },{
    id: 2,
    brand: 'VECTRA',
    color : 'verde',
    km: 987654,
    usado: false
    },{
    id: 3,
    brand: 'DS3',
    color : 'azul',
    km: 990000,
    usado: true
  }]

  const functionProps = () =>{
    console.log('evento do componente pai')
  }

  const [message, setMessage] = useState()

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  return (
    <div className="App">
      <ComponentsState/>
      <ListRender/>
      <RenderizarCondicional/>
      {/** PROPS */}
      <ShowUserName name={idade} />

      {/** DESTRUTURINGS */}
      <CarDetails id={10} brand="VW" km={10000} color="Branco" usado={true}/>

      {/** REAPROVEITAMENTO DE COMPONENTS */}
      <CarDetails brand="FIAT" km={345222} color="Verde" usado={false}/>
      <CarDetails brand="CITROEN" km={222} color="Preto" usado={false}/>
      <CarDetails brand="FORD" km={555} color="Azul" usado={true}/>

      {/** LOOP ARRAY DE OBJETOS */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} usado={car.usado}/>      
      ))}

      {/** FRAGMENTS */}
      <Fragments fragmentData={200}/>

      {/** Children Props - children*/}
      <Container>
        <p>E este é o conteúdo</p>
      </Container>

      {/** Executar função */}
      <ExecuteFunction myFunction={functionProps}/>

      {/** MESSAGE */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
