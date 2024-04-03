import { AuthContextProvider } from './lib/AuthContext'
import { Routes } from './routes'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </div>
  )
}

export default App
