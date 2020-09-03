import React from 'react'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    <div className="teams-page col-12">
      <div className="top-panel col-12">
        <Link to="/teams" className="teams-open col-4">
          OPENS
        </Link>
        <Link to="/teams" className="teams-40a col-4">
          40A
        </Link>
        <Link to="/teams" className="teams-35u col-4">
          35U
        </Link>
      </div>
      <div className="middle-panel col-12">
        <Link to="/teams" className="teams-u19 col-4">
          U19
        </Link>
        <Link to="/teams" className="teams-u17 col-4">
          U17
        </Link>
        <Link to="/teams" className="teams-u15 col-4">
          U15
        </Link>
      </div>
      <div className="bottom-panel col-12">
        <Link to="/teams" className="teams-u19 col-4">
          U13
        </Link>
        <Link to="/teams" className="teams-u17 col-4">
          U11
        </Link>
        <Link to="/teams" className="teams-u15 col-4">
          9U
        </Link>
      </div>
    </div>
  )
}

export default Teams
