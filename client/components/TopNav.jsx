import React from 'react'
import { NavLink, HashRouter as Router } from 'react-router-dom'

const TopNav = () => {
  const menuItems = [
    'home',
    'info',
    'games',
    'categories',
    'results',
    'news'
  ]
  return (
    <Router>
      <div className="nav-container">
        {menuItems.map((menu, i) => {
          return (
            <NavLink
              key={i}
              to={`/${menu}`}
              activeStyle={{ backgroundColor: '#FF66C4' }}
              className="nav-link col-2"
            >
              {menu.toUpperCase()}
            </NavLink>
          )
        })}
      </div>
    </Router>
  )
}

export default TopNav
