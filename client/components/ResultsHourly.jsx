import React from 'react'
import ResultGame from './ResultGame'

const ResultsHourly = (props) => {
  return (
    <div className="hourly-container">
      <div className="results-hour">
        {props.hour}
      </div>
      <div className="hourly-top">
        {props.court1cat && <ResultGame
          day={props.day}
          cat={props.court1cat}
          teamA={props.court1teamA}
          scoreA={props.court1scoreA}
          teamB={props.court1teamB}
          scoreB={props.court1scoreB}/>}
        {props.court2cat && <ResultGame
          day={props.day}
          cat={props.court2cat}
          teamA={props.court2teamA}
          scoreA={props.court2scoreA}
          teamB={props.court2teamB}
          scoreB={props.court2scoreB}/>}
      </div>
      <div className="hourly-bottom">
        {props.court3cat && <ResultGame
          day={props.day}
          cat={props.court3cat}
          teamA={props.court3teamA}
          scoreA={props.court3scoreA}
          teamB={props.court3teamB}
          scoreB={props.court3scoreB}/>}
        {props.court4cat && <ResultGame
          day={props.day}
          cat={props.court4cat}
          teamA={props.court4teamA}
          scoreA={props.court4scoreA}
          teamB={props.court4teamB}
          scoreB={props.court4scoreB}/>}
      </div>
    </div>
  )
}

export default ResultsHourly
