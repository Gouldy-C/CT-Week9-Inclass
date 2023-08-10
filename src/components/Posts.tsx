import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { UserContext } from "../contexts/UserProvider";

const baseApiUrl = import.meta.env.VITE_APP_BASE_API;

export default function Posts({ username }: { username: string }) {
  const [posts, setPosts] = useState<Array<Postable>>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${baseApiUrl}/user-posts/${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPosts(data.posts);
      } else {
        setPosts([])
        window.alert("User not found")};
    })();
  }, [username]);

  return (
    <>
      <h2>Posts</h2>
      <>
        {posts.length !== 0 ? (
          posts.map((post: Postable, index) => {
            return <Post post={post} key={index} />;
          })
        ) : (
          <h5>No Posts</h5>
        )}
      </>
    </>
  );
}
