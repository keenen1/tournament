import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Games from './Games'
import Teams from './Teams'
import TopNav from './TopNav'
import DayOne from './DayOne'
import DayTwo from './DayTwo'

const App = () => {
  return (
    <>
      <TopNav />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/games/day-one" component={DayOne} />
        <Route exact path="/games/day-two" component={DayTwo} />
      </Router>
    </>
  )
}

export default App
