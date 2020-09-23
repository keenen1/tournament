import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="teams-page col-12">
      <div className="left-panel col-12">
        <Link to="/teams/opens" className="teams-category col-12">
          OPENS
        </Link>
        <Link to="/teams/40a" className="teams-category col-12">
          40A
        </Link>
        <Link to="/teams/35u" className="teams-category col-12">
          35U
        </Link>
      </div>
      <div className="middle-panel col-12">
        <Link to="/teams/u19" className="teams-category col-12">
          U19
        </Link>
        <Link to="/teams/u17" className="teams-category col-12">
          U17
        </Link>
        <Link to="/teams/u15" className="teams-category col-12">
          U15
        </Link>
      </div>
      <div className="right-panel col-12">
        <Link to="/teams/u13" className="teams-category col-12">
          U13
        </Link>
        <Link to="/teams/u11" className="teams-category col-12">
          U11
        </Link>
        <Link to={{
          pathname: '/teams/9u',
          state: { fromDashboard: true }
        }} className="teams-category col-12">
          9U
        </Link>
      </div>
    </div>
  )
}

export default Categories
