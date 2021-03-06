import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

// HOOKS
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// COMPONENTS
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// CONTEXT
import { AuthProvider } from './context/AuthContext';

// PAGES
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
  const [user, setUser] = useState(undefined)

  const { auth } = useAuthentication()

  const loadingUser = user == undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
