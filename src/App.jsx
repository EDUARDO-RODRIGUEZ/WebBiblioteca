import { UsuarioContextProvider } from './context/usuarioContext'
import AppRoute from './routes/AppRoute'

function App() {
  return (
    <UsuarioContextProvider>
      <AppRoute />
    </UsuarioContextProvider>
  )
}

export default App
