import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { UserContext } from "../contexts/UserProvider"
import { useContext } from "react"
import UserSearch from "./UserSearch"

export default function Header() {


  const {user} = useContext(UserContext)

  


  
  return(
  <Navbar bg='dark' sticky="top" className="header">
    <Container>
      <Navbar.Brand className="brand text-light" as={NavLink} to='/'>Matrix Fakebook</Navbar.Brand>
      {user.username === '' ? 
      <div className="d-flex">
        <Nav.Item className="mx-2">
          <Nav.Link as={NavLink} to='/Login'>
            Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
        </Nav.Item>
      </div>
      :
      <>
        <UserSearch/>
        <Nav.Item className="mx-2">
            <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link>
        </Nav.Item>
      </>
      }
    </Container>
  </Navbar>  
  )


}