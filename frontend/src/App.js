import { BrowserRouter, Routes, Route, Navigate } from 'react-route-dom'


function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path = '/'
            element =  {user ? <Home /> : <Navigate to="/login" />}
          />
          <Route 
            path = '/login'
            element =  {!user ? <Login /> : <Navigate to="/" />}
          />
          <Route 
            path = '/signup'
            element =  {!user ? <Signup /> : <Navigate to="/" />}
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
