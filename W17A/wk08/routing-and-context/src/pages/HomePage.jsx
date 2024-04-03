import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuthContext } from '../lib/AuthContext'

export function HomePage() {
  const { token } = useAuthContext()
  return (
    <Layout>
      home page
      <br />
      You're logged in as {`${token}`}
      <br />
      <Link to="/posts/1">Go to first post</Link>
    </Layout>
  )
}
