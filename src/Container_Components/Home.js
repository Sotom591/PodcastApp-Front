import React from "react"
import Profile from '../Presentational_Components/Profile'
import NavBar from '../Presentational_Components/NavBar'

const Home = (props) => {
  return(
    <div>
      <NavBar />
      Home
      <Profile />
    </div>
  )
}

export default Home
