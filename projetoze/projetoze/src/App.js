import './App.css';

// React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'

//contexto

import { useSession } from '../src/hooks/useSession'

function App() {
  const { logado } = useSession()
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={logado ? <About /> : <Navigate to="/" />} />
          <Route path='/login' element={!logado ? <Login /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
