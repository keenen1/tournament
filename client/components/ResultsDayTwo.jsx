import React from 'react'
import { Link } from 'react-router-dom'

const ResultsDayTwo = () => {
  return (
    <div className="results-page col-12">
      <div className="day-one col-6">
        <Link to="/results/day-two/5v5">
          5v5
        </Link>
      </div>
      <div className="day-two col-6">
        <Link to="/results/day-two/3x3">
          3x3
        </Link>
      </div>
    </div>
  )
}

export default ResultsDayTwo
