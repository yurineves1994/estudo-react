import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';
import {useState} from 'react';

function App() {
  const [pessoa] = useState('Yuri')
  return (
    <div className="App">
      <h1>React com CSS</h1>
      {/** CSS por componentes */}
      <MyComponents/>

      {/** CSS INLINE  */}
      <p style={{color:"blue", fontSize:"14px"}}>CSS INLINE</p>

      {/** CLASSE DINAMICA */}
      <h2 className={pessoa == 'Yuri'? 'positivo': 'negativo'}>Esse titulo possui uma classe dinanica</h2>

      {/** CSS MODULE */}
      <Title />
    </div>
  );
}

export default App;
