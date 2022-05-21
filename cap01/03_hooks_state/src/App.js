import { useState } from 'react';
import './App.css';
import CarDetails from './components/CarDetails';
import ComponentsState from './components/ComponentsState';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import RenderizarCondicional from './components/RenderizarCondicional';
import ShowUserName from './components/ShowUserName';

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

  return (
    <div className="App">
      <ComponentsState/>
      <ListRender/>
      <RenderizarCondicional/>
      {/** PROPS */}
      <ShowUserName name={idade} />

      {/** DESTRUTURINGS */}
      <CarDetails id={10} brand="VW" km={10000} color="Branco" usado={true}/>

      {/** REAPROVEITAMENTO DE COMPONENTS 
      <CarDetails brand="FIAT" km={345222} color="Verde" usado={false}/>
      <CarDetails brand="CITROEN" km={222} color="Preto" usado={false}/>
      <CarDetails brand="FORD" km={555} color="Azul" usado={true}/>*/}

      {/** LOOP ARRAY DE OBJETOS */}
      {cars.map((car) => (
        <CarDetails id={car.id} brand={car.brand} km={car.km} color={car.color} usado={car.usado}/>      
      ))}

      {/** FRAGMENTS */}
      <Fragments/>
    </div>
  );
}

export default App;
