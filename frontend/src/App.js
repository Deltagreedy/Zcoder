import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Problem from './pages/Problem'
<<<<<<< HEAD
import NewProb from './pages/NewProb'
import Profile from './pages/Profile'
import Edit_Profile from './components/Edit_Profile'
import Update_Profile from './components/Update_Profile'
import Other_Profile from './pages/Other_Profile'
=======

>>>>>>> origin/error
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()

  useEffect(() => {
<<<<<<< HEAD
    document.title = "reddit for nerds"
  }, []);
=======
    document.title = "Z-Coder"
 }, []);
 
>>>>>>> origin/error

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
<<<<<<< HEAD
            element={!user ? <Login /> : <Navigate to="/problem" />}
=======
            element={!user ? <Login /> : <Navigate to="/" />}
>>>>>>> origin/error
          />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path='/problem'
<<<<<<< HEAD
            element={user ? <Problem /> : <Navigate to="/signup" />}
          />
          <Route
            path='/profile'
            element={user ? <Profile /> : <Navigate to="/signup" />}
          />
          <Route
            path='/profile/:usenam'
            element={< Other_Profile />}
          />
          <Route
            path='/profile/edit'
            element={user ? <Edit_Profile /> : <Navigate to="/signup" />}
          />
          <Route
            path='/profile/update'
            element={user ? < Update_Profile /> : <Navigate to="/signup" />}
          />
          <Route
            path='/problem/new'
            element={user ? <NewProb /> : <Navigate to="/signup" />}
=======
            element={user ? <Problem /> : <Navigate to="/login" />}
>>>>>>> origin/error
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
