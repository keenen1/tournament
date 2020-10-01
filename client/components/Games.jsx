import React from 'react'
import { Link } from 'react-router-dom'

const Games = () => {
  return (
    <div className="games-page col-12">
      <div className="day-one">
        <Link to="/games/day-one" replace>
          DAY 1
        </Link>
      </div>
      <div className="day-two">
        <Link to="/games/day-two" replace>
          DAY 2
        </Link>
      </div>
    </div>
  )
}

export default Games
