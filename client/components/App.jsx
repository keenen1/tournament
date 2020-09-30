import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import TopNav from './TopNav'
import Home from './Home'
import Games from './Games'
import DayOne from './DayOne'
import DayTwo from './DayTwo'
import Categories from './Categories'
import Info from './Info'
import Teams from './Teams'
import Results from './Results'
import ResultsDayOne from './ResultsDayOne'
import ResultsDayTwo from './ResultsDayTwo'

const App = () => {
  return (
    <>
      <TopNav />
      <Router>
        <Route exact path="/" render={() => <Redirect to="/home" /> } />
        <Route exact path="/home" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/games/day-one" component={DayOne} />
        <Route exact path="/games/day-two" component={DayTwo} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:id" component={Teams} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/results/day-one" component={ResultsDayOne} />
        <Route exact path="/results/day-two" component={ResultsDayTwo} />
      </Router>
    </>
  )
}

export default App
