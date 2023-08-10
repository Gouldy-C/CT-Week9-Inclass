import { useNavigate } from "react-router-dom";
import Body from "../components/Body";
import { FormEvent, useContext, useEffect, useRef }from 'react'
import { UserContext } from "../contexts/UserProvider";

const baseApiUrl = import.meta.env.VITE_APP_BASE_API

export default function LoginPage() {

  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    if (user.username){
      navigate('/')
    }
  }, [user])
  

  async function handleUserData(e:FormEvent){
    e.preventDefault()
    const res = await fetch(`${baseApiUrl}/sign-in`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameField.current!.value,
        password: passwordField.current!.value
      })
    })
    if (res.ok){
      const data = await res.json()
      setUserStatus(usernameField.current!.value, data.access_token)

      usernameField.current!.value = ''
      passwordField.current!.value = ''
    } else window.alert('Invalid UserData')
  }

  function setUserStatus(username: string, token: string){
    setUser({username: username, token: token})

      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('username', JSON.stringify(username))
  }

  return (
    <Body sidebar={false}>
      <h1>Login Page</h1>
      <form onSubmit={handleUserData} className="login-form">
        <label >Username:<br />
        <input type="text" name="username" id="username"  ref={usernameField}/>
        </label><br />

        <label >Password:<br />
        <input type="password" name="password" id="password" ref={passwordField} />
        </label><br /><br />

        <button type="submit" className="btn btn-success">Login</button>

      </form>
    </Body>
  )
}
