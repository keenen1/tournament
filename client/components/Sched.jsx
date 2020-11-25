import React from 'react'
import { Link } from 'react-router-dom'

const Sched = () => {
  return (
    <div className="games-page col-12">
      <Link to="/games/day-one" replace className="day-one">
        DAY ONE
      </Link>

      <Link to="/games/day-two" replace className="day-two">
        DAY TWO
      </Link>
    </div>
  )
}

export default Sched
