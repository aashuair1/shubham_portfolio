
import './signup.css'

interface SignupProps {
  onSwitchPage: () => void
}

function Signup({ onSwitchPage }: SignupProps) {
  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Registration functionality will be added later
  }

  return (
    <section>
      <h2>Sign Up</h2>

      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
          />
        </div>

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
            placeholder="Create a password"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account?{' '}
        <button type="button" onClick={onSwitchPage}>
          Login
        </button>
      </p>
    </section>
  )
}

export default Signup
