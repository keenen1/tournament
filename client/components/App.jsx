import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import TopNav from './TopNav'
import Home from './Home'
import Games from './Games'
import DayOne from './DayOne'
import DayTwo from './DayTwo'
import Categories from './Categories'
import Info from './Info'

const App = () => {
  return (
    <>
      <TopNav />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/teams" component={Categories} />
        <Route exact path="/games/day-one" component={DayOne} />
        <Route exact path="/games/day-two" component={DayTwo} />
        <Route exact path="/info" component={Info} />
      </Router>
    </>
  )
}

export default App
