import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}
