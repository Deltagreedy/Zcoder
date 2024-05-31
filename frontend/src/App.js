import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Problem from './pages/Problem'

import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Menubar />
        <Routes>
          <Route
            path='/'
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path='/problem'
            element={<Problem />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
