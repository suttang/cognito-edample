import * as React from 'react'
import { Link } from 'react-router-dom'

export interface Props {}

const Home: React.SFC<Props> = () => {
  return (
    <div>
      <p>This is home page</p>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  )
}

export default Home
