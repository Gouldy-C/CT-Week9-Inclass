

export default function Post({post}:{post:Postable}) {

  return (
    <div>
      <p>{post.body}<br />{post.timestamp}</p>
    </div>
  )
}

