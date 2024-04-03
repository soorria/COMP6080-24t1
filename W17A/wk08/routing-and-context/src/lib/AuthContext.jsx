import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

const LS_TOKEN_KEY = '6080wk08:token'

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(localStorage.getItem(key) ?? initialValue)

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export function AuthContextProvider(props) {
  const [token, setToken] = useLocalStorage(LS_TOKEN_KEY, null)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)

  if (!ctx) {
    throw new Error(
      'useAuthContext must be used in a component that is a child of an <AuthContextProvider>'
    )
  }

  return ctx
}
