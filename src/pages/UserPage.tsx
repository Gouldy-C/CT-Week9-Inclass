import { useNavigate, useParams } from "react-router-dom";
import Body from "../components/Body";
import Posts from "../components/Posts";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";

export default function UserPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username === '') {
      navigate("/");
    }
  }, [user]);

  const { username } = useParams();
  console.log(username);

  return (
    <Body sidebar>
      <h2>{username}'s Page</h2>
      <Posts username={username!} />
    </Body>
  );
}
