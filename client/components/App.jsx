import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import TopNav from './TopNav'
import Home from './Home'
import Sched from './Sched'
import DayOne from './DayOne'
import DayTwo from './DayTwo'
import Venue from './Venue'
import Teams from './Teams'
import Results from './Results'
import ResultsDayOne from './ResultsDayOne'
import ResultsDayTwo from './ResultsDayTwo'
import Groups from './Groups'
import Rules from './Rules'
import DayOneFiveOnFive from './DayOneFiveOnFive'
import DayOneThreeOnThree from './DayOneThreeOnThree'
import DayTwoFiveOnFive from './DayTwoFiveOnFive'
import DayTwoThreeOnThree from './DayTwoThreeOnThree'

const App = () => {
  return (
    <>
      <TopNav />
      <Router>
        <Route exact path="/" render={() => <Redirect to="/home" /> } />
        <Route exact path="/home" component={Home} />
        <Route exact path="/sched" component={Sched} />
        <Route exact path="/games/day-one" component={DayOne} />
        <Route exact path="/games/day-two" component={DayTwo} />
        <Route exact path="/games/day-one/5v5" component={DayOneFiveOnFive} />
        <Route exact path="/games/day-one/3x3" component={DayOneThreeOnThree} />
        <Route exact path="/games/day-two/5v5" component={DayTwoFiveOnFive} />
        <Route exact path="/games/day-two/3x3" component={DayTwoThreeOnThree} />
        <Route exact path="/venue" component={Venue} />
        <Route exact path="/groups" component={Groups} />
        <Route path="/groups/:id" component={Teams} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/results/day-one" component={ResultsDayOne} />
        <Route exact path="/results/day-two" component={ResultsDayTwo} />
        <Route exact path="/rules" component={Rules} />
      </Router>
    </>
  )
}

export default App
