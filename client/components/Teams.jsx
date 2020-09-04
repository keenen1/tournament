import React from 'react'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    <div className="teams-page col-12">
      <div className="left-panel col-12">
        <Link to="/teams" className="teams-open col-12">
          OPENS
        </Link>
        <Link to="/teams" className="teams-40a col-12">
          40A
        </Link>
        <Link to="/teams" className="teams-35u col-12">
          35U
        </Link>
      </div>
      <div className="middle-panel col-12">
        <Link to="/teams" className="teams-u19 col-12">
          U19
        </Link>
        <Link to="/teams" className="teams-u17 col-12">
          U17
        </Link>
        <Link to="/teams" className="teams-u15 col-12">
          U15
        </Link>
      </div>
      <div className="right-panel col-12">
        <Link to="/teams" className="teams-u13 col-12">
          U13
        </Link>
        <Link to="/teams" className="teams-u11 col-12">
          U11
        </Link>
        <Link to="/teams" className="teams-9u col-12">
          9U
        </Link>
      </div>
    </div>
  )
}

export default Teams
