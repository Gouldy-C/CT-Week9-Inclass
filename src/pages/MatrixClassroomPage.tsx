import Body from "../components/Body";
import DisplayClass from "../components/DisplayClass";
import Whiteboard from "../components/Whiteboard";

export default function MatrixClassroomPage() {

  const students = [
    'Christian',
    'Sima',
    'Ben',
    'David',
    'Michael',
    'Tajay',
    'Ben']

    
  return (
    <Body sidebar>
      <DisplayClass students={students} />
      <Whiteboard students={students} />
    </Body>
  )
}
