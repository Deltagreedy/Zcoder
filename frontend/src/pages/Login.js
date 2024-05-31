import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <p>Please fill the form to log in to your account.</p>
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
      <button disabled={isLoading}>Log in</button>
      <br />
      <br />
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login