import { useState } from 'react'
import { Layout } from '../components/Layout'
import { useAuthContext } from '../lib/AuthContext'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()
  const { setToken } = useAuthContext()
  const [email, setEmail] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        // const formData = new FormData(event.currentTarget)
        // setToken(formData.get('email'))

        setToken(email)
        navigate('/')
      }}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={event => {
          setEmail(event.currentTarget.value)
        }}
      ></input>

      <br />

      {email === 'bob@bob.com' && <p>You're blocked</p>}
      <input type="password" name="password"></input>

      <button type="submit">Login</button>
    </form>
  )
}

export function LoginPage(props) {
  return (
    <Layout>
      <LoginForm setToken={props.setToken} />
    </Layout>
  )
}
