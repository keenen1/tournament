import React from 'react'
import { Link } from 'react-router-dom'

const Games = () => {
  return (
    <div className="games-page col-12">
      <Link to="/games" className="games-sched col-4">
        SCHED
      </Link>
      <Link to="/games" className="games-playoff col-4">
        PLAYOFF
      </Link>
      <Link to="/games" className="games-result col-4">
        RESULTS
      </Link>
    </div>
  )
}

export default Games
