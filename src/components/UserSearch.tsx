import { FormEvent, useContext, useEffect, useRef } from "react";
import { UserContext } from "../contexts/UserProvider";
import { useNavigate } from "react-router-dom";

export default function UserSearch() {

  const searchUser = useRef<HTMLInputElement>(null)
  const {user} = useContext(UserContext)
  const navigate = useNavigate()

  function handleFormSubmit(e:FormEvent){
    e.preventDefault()
    navigate(`/user-page/${searchUser.current!.value}`)
  }

  useEffect(() => {
    if (user.username === ''){
      navigate('/')
    }
  }, [user])


  return (
    <form className="d-flex" onSubmit={handleFormSubmit}>
      <input type="search" className="form-control mx-1" placeholder="Search User" ref={searchUser}/>
      <button type="submit" className="btn btn-success mx-1">Search</button>
    </form>
  )
}
