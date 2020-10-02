import React from 'react'
import ResultGame from './ResultGame'

const ResultsHourly = (props) => {
  return (
    <div className="hourly-container">
      <div style={{ margin: '5px', fontSize: '25px' }}>
        {props.hour}
      </div>
      <div className="hourly-top">
        <ResultGame
          cat={props.court1cat}
          teamA={props.court1teamA}
          scoreA={props.court1scoreA}
          teamB={props.court1teamB}
          scoreB={props.court1scoreB}/>
        <ResultGame
          cat={props.court2cat}
          teamA={props.court2teamA}
          scoreA={props.court2scoreA}
          teamB={props.court2teamB}
          scoreB={props.court2scoreB}/>
        <ResultGame
          cat={props.court3cat}
          teamA={props.court3teamA}
          scoreA={props.court3scoreA}
          teamB={props.court3teamB}
          scoreB={props.court3scoreB}/>
      </div>
      <div className="hourly-bottom">
        <ResultGame
          cat={props.court4cat}
          teamA={props.court4teamA}
          scoreA={props.court4scoreA}
          teamB={props.court4teamB}
          scoreB={props.court4scoreB}/>
        <ResultGame
          cat={props.court5cat}
          teamA={props.court5teamA}
          scoreA={props.court5scoreA}
          teamB={props.court5teamB}
          scoreB={props.court5scoreB}/>
        <ResultGame
          cat={props.court6cat}
          teamA={props.court6teamA}
          scoreA={props.court6scoreA}
          teamB={props.court6teamB}
          scoreB={props.court6scoreB}/>
      </div>
    </div>
  )
}

export default ResultsHourly
