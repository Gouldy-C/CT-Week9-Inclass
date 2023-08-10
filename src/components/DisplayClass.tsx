import { Container } from "react-bootstrap"


export default function DisplayClass({students}: DisplayClassableProps) {

  const instructor = 'Sean'

  return (
    <Container>
    <h3>Instructor: {instructor}</h3>
    <h4>Students</h4>
    {students.length > 0 && 
    <ul>
      {students.map((student, i) => <li key={i}>{student}</li>)}
    </ul>}
    </Container>
  )

}