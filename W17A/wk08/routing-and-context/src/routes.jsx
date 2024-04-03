import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { PostPage } from './pages/PostPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/posts/:id',
    element: <PostPage />,
  },
])

export function Routes(props) {
  return <RouterProvider router={router}>{props.children}</RouterProvider>
}
