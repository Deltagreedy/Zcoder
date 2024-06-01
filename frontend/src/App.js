import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Problem from './pages/Problem'
import NewProb from './pages/NewProb'

import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()

  useEffect(() => {
    document.title = "Z-Coder"
 }, []);
 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Menubar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to="/problem" />}
          />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path='/problem'
            element={user ? <Problem /> : <Navigate to="/login" />}
          />
          <Route
            path='/problem/new'
            element={user ? <NewProb /> : <Navigate to="/login" />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
