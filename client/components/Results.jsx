import React from 'react'
import { Link } from 'react-router-dom'

const Results = () => {
  return (
    <div className="results-page col-12">
      <div className="day-one col-6">
        <Link to="/results/day-one">
          DAY 1
        </Link>
      </div>
      <div className="day-two col-6">
        <Link to="/results/day-two">
          DAY 2
        </Link>
      </div>
    </div>
  )
}

export default Results
