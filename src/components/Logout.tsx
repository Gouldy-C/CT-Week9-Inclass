import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"
import { Spinner } from "react-bootstrap"

export default function Logout() {

  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setUser({username: "", token: ""})
    navigate('/')
  })

  return (
    <Spinner animation="border" variant="info" />
  )
}
