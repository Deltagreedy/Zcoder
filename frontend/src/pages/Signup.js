import { useState } from "react"
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> origin/error
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(username, email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>Please fill the form to create an account.</p>
            <label>Username:</label>
            <br />
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <br />
            <label>Email address:</label>
            <br />
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br />
<<<<<<< HEAD
            <button disabled={isLoading} style={{float: 'left', marginRight: '20px'}}>NEXT</button>
            <Link to="/login"><p>or log in</p></Link>
=======
            <button disabled={isLoading}>Sign up</button>
            <br />
            <br />
>>>>>>> origin/error
            {error && <div className="error">{error}</div>}
            <br />
        </form>
    )
}

export default Signup