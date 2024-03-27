import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { listPostsWithUsers } from './posts'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

function Post({ post, onPostClick }) {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.body}
          </Typography>
          <Typography variant="body2">{post.user.name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onPostClick(post.id)}>
            See post details
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

function App() {
  const [posts, setPosts] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    listPostsWithUsers().then(newPostsData => setPosts(newPostsData))
  }, [])

  console.log(<Post />)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>

      {posts.map((post, index) => (
        <Post
          post={post}
          key={post.id}
          onPostClick={postId => {
            console.log({ postId })
          }}
        />
      ))}
    </div>
  )
}

export default App
