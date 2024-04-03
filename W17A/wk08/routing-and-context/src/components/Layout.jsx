import { Nav } from './Nav'

export function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}
