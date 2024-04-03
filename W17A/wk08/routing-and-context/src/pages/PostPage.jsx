import { Link, useParams } from 'react-router-dom'

export function PostPage() {
  const params = useParams()

  const postId = parseInt(params.id)

  return (
    <div>
      Content for post {params.id}
      <br />
      {postId > 1 ? (
        <Link to={`/posts/${postId - 1}`}>Go to previous post</Link>
      ) : null}
      <br />
      <Link to={`/posts/${postId + 1}`}>Go to next post</Link>
    </div>
  )
}
