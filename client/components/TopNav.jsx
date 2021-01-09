import React from 'react'
import { NavLink, HashRouter as Router } from 'react-router-dom'

const TopNav = () => {
  const menuItems = [
    'home',
    'sched',
    'groups',
    'results',
    'winners'
  ]

  return (
    <Router>
      <div className="nav-container">
        {menuItems.map((menu, i) => {
          return (
            <NavLink
              key={i}
              to={`/${menu}`}
              replace
              activeStyle={{ backgroundColor: '#037971' }}
              className='nav-link'
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
