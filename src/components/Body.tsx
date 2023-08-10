import { Container, Stack } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MakePost from "./MakePost";
import { UserContext } from "../contexts/UserProvider";
import { useContext } from "react";


interface BodyProps {
  sidebar: boolean
  children: JSX.Element | JSX.Element[]
}

export default function Body({sidebar, children}:BodyProps) {

  const {user} = useContext(UserContext)

  return (
    <Stack direction='horizontal'>
      {sidebar && <Sidebar/>}
      <Container>
        {children}

      </Container>
      {user.username !== '' ? 
        <MakePost /> : ''}
    </Stack>
  )
}
