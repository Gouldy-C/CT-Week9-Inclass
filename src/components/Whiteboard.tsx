import { useState } from "react";
import { Container } from "react-bootstrap";


export default function Whiteboard({students}: DisplayClassableProps) {

  const [whiteboardStudent, setWhiteboardStudent] = useState('Sima')

  
  return (
    
    <Container>
      <p>Today's whiteboard student is {whiteboardStudent}</p>
      <button className="btn btn-success" onClick={() => setWhiteboardStudent(
          students[Math.floor(Math.random() * students.length)]
          )}>
        Update Whiteboard Student
      </button>
    </Container>

  )
}
