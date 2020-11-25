import React from 'react'
import { Link } from 'react-router-dom'

const DayTwo = () => {
  return (
    <>
      <div className="category-pane">DAY TWO</div>
      <div className="category-page col-12">
        <Link to="/games/day-two/5v5" replace className="day-one">
          5v5
        </Link>

        <Link to="/games/day-two/3x3" replace className="day-two">
          3x3
        </Link>
      </div>
    </>
  )
}

export default DayTwo
