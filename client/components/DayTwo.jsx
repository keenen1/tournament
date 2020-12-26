import React from 'react'
import { Link } from 'react-router-dom'

const DayTwo = () => {
  return (
    <>
      <div className="category-pane">DAY TWO</div>
      <div className="category-page col-12">
        <Link to="/games/day-two/5v5" replace className="five-on-five">
          5v5
        </Link>

        <Link to="/games/day-two/3x3" replace className="three-on-three">
          3x3
        </Link>
      </div>
    </>
  )
}

export default DayTwo
