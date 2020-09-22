import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
    <Router>
      <div className="top-nav">
        <Link to="/" className="col-3">HOME</Link>
        <Link to="/games" className="col-3">GAMES</Link>
        <Link to="/teams" className="col-3">TEAMS</Link>
        <Link to="/results" className="col-3">RESULTS</Link>
      </div>
    </Router>
    </>
  )
}

export default TopNav
