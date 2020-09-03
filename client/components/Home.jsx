import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page col-12">
      <Link to="/games" className="home-games col-12">
        GAMES
      </Link>
      <Link to="/teams" className="home-teams col-12">
        TEAMS
      </Link>
    </div>
  )
}

export default Home
