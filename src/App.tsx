import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import MatrixClassroom from './pages/MatrixClassroomPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import Logout from './components/Logout';
import { useContext, useEffect } from 'react';
import { UserContext } from './contexts/UserProvider';


function App() {

  const {user, setUser} = useContext(UserContext)


  useEffect(() => {
    if (!user.token && localStorage.getItem('token') ){
      setUser({username: JSON.parse(localStorage.getItem('username')!),
      token: JSON.parse(localStorage.getItem('token')!)
    })
    }
  
  }, [])
  

  return (
    <Container fluid className='container'>
      <BrowserRouter>
      
      <Header/>

      
      <Routes>
        <Route path='/' element={<MatrixClassroom/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/user-page/:username' element={<UserPage/>} />
        {/* <Route path='*' element={<Navigate to={'/'}/>} /> */}
      </Routes>

      </BrowserRouter>
    </Container>
    
  )


}

export default App
