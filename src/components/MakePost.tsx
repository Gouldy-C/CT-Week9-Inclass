import { FormEvent, useContext, useRef } from "react"
import { UserContext } from "../contexts/UserProvider"


const baseApiUrl = import.meta.env.VITE_APP_BASE_API

export default function MakePost() {

  const {user} = useContext(UserContext)
  const postField = useRef<HTMLInputElement>(null)

  async function postFormSubmit(e: FormEvent) {
    e.preventDefault()
    const res = await fetch(`${baseApiUrl}/publish-post`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        body: `${postField.current!.value}` 
      })
    })
    if (res.ok) {
      postField.current!.value = ''
      console.log('Posted successfully');
    } else window.alert('Post was unable to be posted, Try again')

    }

  return (
    
    <>
      <form className="post-form" onSubmit={postFormSubmit}>
        <label className="form-label w-100" htmlFor="">New Post:
        </label><br/>
          <input className="form-control my-1 w-100" type="text" ref={postField} required  placeholder="Type your post here"/>
        <button className="btn btn-success my-1" type="submit">Post</button>
      </form>
    </>
  )
}
