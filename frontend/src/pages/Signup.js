import { useState } from "react"
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>Please fill the form to create an account.</p>
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
            <button disabled={isLoading}>Sign up</button>
            <br />
            <br />
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup