import './App.css';
import ComponentsState from './components/ComponentsState';
import ListRender from './components/ListRender';
import RenderizarCondicional from './components/RenderizarCondicional';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Yuri"
  return (
    <div className="App">
      <ComponentsState/>
      <ListRender/>
      <RenderizarCondicional/>
      <ShowUserName name={name} />
    </div>
  );
}

export default App;
