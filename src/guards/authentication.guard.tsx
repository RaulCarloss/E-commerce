import { FunctionComponent, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Components
import Header from '../components/header/header.component'
import Loading from '../components/loading/loading.component'

// Define the shape of your Redux state for type safety
interface RootState {
  userReducer: {
    isAuthenticated: boolean
  }
}

interface AuthenticationGuardProps {
  children: ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticationGuardProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.userReducer)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes...' />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard