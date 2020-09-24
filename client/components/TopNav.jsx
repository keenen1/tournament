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
      <div className="top-nav">
        {menuItems.map((menu, i) => {
          return (
            <NavLink
              key={i}
              to={`/${menu}`}
              activeStyle={{ color: 'white' }}
              // activeClassName="active-nav"
              className="col-2"
            >
              <div className="top-nav"></div>
              {menu.toUpperCase()}
            </NavLink>
          )
        })}
      </div>
    </Router>
  )
}

export default TopNav
