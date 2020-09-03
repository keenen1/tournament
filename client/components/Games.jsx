import React from 'react'
import { Link } from 'react-router-dom'

const Games = () => {
  return (
    <div className="games-page col-12">
      <Link to="/games" className="games-sched col-4">
        SCHED
      </Link>
      <Link to="/games" className="games-result col-4">
        RESULTS
      </Link>
      <Link to="/games" className="games-bracket col-4">
        BRACKET
      </Link>
    </div>
  )
}

export default Games
