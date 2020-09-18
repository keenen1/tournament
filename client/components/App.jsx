import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Games from './Games'
import Teams from './Teams'
import TopNav from './TopNav'

const App = () => {
  return (
    <>
      <TopNav />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/teams" component={Teams} />
      </Router>
    </>
  )
}

export default App
