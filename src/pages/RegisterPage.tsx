import { FormEvent, useContext, useEffect, useRef } from "react";
import Body from "../components/Body";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

const baseApiUrl = import.meta.env.VITE_APP_BASE_API

export default function RegisterPage() {

  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const verifyField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const firstNameField = useRef<HTMLInputElement>(null)
  const lastNameField = useRef<HTMLInputElement>(null)

  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()


  useEffect(() => {
    if (user.username) {
      navigate('/')
    }
  }, [user])

  async function handleUserData(e:FormEvent){
    e.preventDefault()
    const res = await fetch(`${baseApiUrl}/register`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameField.current!.value,
        password: passwordField.current!.value,
        email: emailField.current!.value,
        first_name: firstNameField.current!.value,
        last_name: lastNameField.current!.value
      })
    })
    if (res.ok){
      const data = await res.json()
      setUser({username: usernameField.current!.value.toString(), token: data.access_token})
      resetForm()
    } else window.alert('Invalid UserData')
  }

  function resetForm(){
    usernameField.current!.value = ''
    passwordField.current!.value = ''
    verifyField.current!.value = ''
    firstNameField.current!.value = ''
    lastNameField.current!.value = ''
    emailField.current!.value = ''
  }
  

  return (
    
    <Body sidebar={false}>
      <h1>Register Page</h1>
      <form onSubmit={handleUserData} className="login-form">
        <label>First Name:<br />
        <input type="text" id="first-name"  ref={firstNameField}/>
        </label><br />

        <label>Last Name::<br />
        <input type="text" id="last-name"  ref={lastNameField}/>
        </label><br />

        <label>Username:<br />
        <input type="text" id="username"  ref={usernameField} required/>
        </label><br />

        <label>Email:<br />
        <input type="text" id="email"  ref={emailField} required/>
        </label><br />

        <label>Password:<br />
        <input type="password" id="password"  ref={passwordField} required/>
        </label><br />

        <label>Confirm Password:<br />
        <input type="password" id="confirmPassword" ref={verifyField} required/>
        </label><br /><br />

        <button type="submit" className="btn btn-success">Register</button>

      </form>
    </Body>

  )
}
