
import './login.css'

interface LoginProps {
  onSwitchPage: () => void
}

function Login({ onSwitchPage }: LoginProps) {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Login functionality will be added later
  }

  return (
    <section>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>

      <p>
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchPage}>
          Sign Up
        </button>
      </p>
    </section>
  )
}

export default Login
