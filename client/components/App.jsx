import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

// NAV
import TopNav from './TopNav'
// HOME
import Home from './Home'
// TEAMS
import Groups from './Groups'
import Teams from './Teams'
// SCHED
import Sched from './Sched'
import DayOne from './DayOne'
import DayTwo from './DayTwo'
import DayOneFiveOnFive from './DayOneFiveOnFive'
import DayOneThreeOnThree from './DayOneThreeOnThree'
import DayTwoFiveOnFive from './DayTwoFiveOnFive'
import DayTwoThreeOnThree from './DayTwoThreeOnThree'
// RESULTS
import Results from './Results'
import ResultsDayOne from './ResultsDayOne'
import ResultsDayTwo from './ResultsDayTwo'
import ResultsDayOne5v5 from './ResultsDayOne5v5'
import ResultsDayTwo5v5 from './ResultsDayTwo5v5'
import ResultsDayOne3x3 from './ResultsDayOne3x3'
import ResultsDayTwo3x3 from './ResultsDayTwo3x3'
// VENUE
import Venue from './Venue'
// WINNERS
import Winners from './Winners'

const App = () => {
  return (
    <>
      <TopNav />
      <Router>
        <Route exact path="/" render={() => <Redirect to="/home" /> } />
        {/* HOME */}
        <Route exact path="/home" component={Home} />
        {/* SCHED */}
        <Route exact path="/sched" component={Sched} />
        <Route exact path="/games/day-one" component={DayOne} />
        <Route exact path="/games/day-two" component={DayTwo} />
        <Route exact path="/games/day-one/5v5" component={DayOneFiveOnFive} />
        <Route exact path="/games/day-one/3x3" component={DayOneThreeOnThree} />
        <Route exact path="/games/day-two/5v5" component={DayTwoFiveOnFive} />
        <Route exact path="/games/day-two/3x3" component={DayTwoThreeOnThree} />
        {/* TEAMS */}
        <Route exact path="/groups" component={Groups} />
        <Route path="/groups/:id" component={Teams} />
        {/* RESULTS */}
        <Route exact path="/results" component={Results} />
        <Route exact path="/results/day-one/" component={ResultsDayOne} />
        <Route exact path="/results/day-two/" component={ResultsDayTwo} />
        <Route exact path="/results/day-one/5v5" component={ResultsDayOne5v5} />
        <Route exact path="/results/day-two/5v5" component={ResultsDayTwo5v5} />
        <Route exact path="/results/day-one/3x3" component={ResultsDayOne3x3} />
        <Route exact path="/results/day-two/3x3" component={ResultsDayTwo3x3} />
        {/* VENUE */}
        <Route exact path="/venue" component={Venue} />
        {/* WINNERS */}
        <Route exact path="/winners" component={Winners} />
      </Router>
    </>
  )
}

export default App
