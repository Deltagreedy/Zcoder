import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout()
    }

    return (
        <header className="navbar-container">
            <div className="container">
                <Link to='/'>
                    <h1>Z-Coder</h1>
                </Link>
            </div>

            <nav>
                {user ? (<div>
<<<<<<< HEAD
                    <span style={{marginRight: '30px'}}>{user.username}</span>
                    <button style={{marginRight: '30px'}} onClick={handleClick}>log out</button>
                </div>) : (<div>
                    <Link to="/login" style={{marginRight: '30px'}}>login</Link>
                    <Link to="/signup" style={{marginRight: '30px'}}>signup</Link>
=======
                    <span style={{marginRight: '30px', fontSize: '20px'}}>{user.username}</span>
                    <button style={{marginRight: '30px', fontSize: '20px'}} onClick={handleClick}>log out</button>
                </div>) : (<div>
                    <Link to="/login" style={{marginRight: '30px', fontSize: '20px'}}>login</Link>
                    <Link to="/signup" style={{marginRight: '30px', fontSize: '20px'}}>signup</Link>
>>>>>>> origin/error
                </div>)
                }
            </nav>
        </header>
    )
}

export default Navbar