import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
    <Router>
      <div className="top-nav">
        <Link to="/" className="col-2">HOME</Link>
        <Link to="/games" className="col-2">GAMES</Link>
        <Link to="/teams" className="col-2">CATEGORIES</Link>
        <Link to="/results" className="col-2">RESULTS</Link>
        <Link to="/news" className="col-2">NEWS</Link>
        <Link to="/info" className="col-2">INFO</Link>
      </div>
    </Router>
    </>
  )
}

export default TopNav
