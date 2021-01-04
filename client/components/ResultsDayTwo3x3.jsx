import React from 'react'
import ResultsHourly from './ResultsHourly'

const ResultsDayTwo3x3 = () => {
  return (
    <>
      <div className="category-pane">DAY TWO &gt; 3x3</div>
      <div className="results-day">
        <ResultsHourly
          hour={'12:10 PM'}

          court1cat={'WOM'}
          court1teamA={'UFCSA WEST'}
          court1scoreA={0}
          court1teamB={'HITZ'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'SOUTH AUCKLAND'}
          court2scoreA={0}
          court2teamB={'CASH CONVERTERS'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'12:25 PM'}

          court1cat={'WOM'}
          court1teamA={'EL HOMBRES'}
          court1scoreA={0}
          court1teamB={'AIRBALLERS'}
          court1scoreB={0}
        />
        <ResultsHourly
          hour={'12:40 PM'}

          court1cat={'SF1'}
          court1teamA={'TOP 1'}
          court1scoreA={0}
          court1teamB={'TOP 4'}
          court1scoreB={0}

          court2cat={'SF2'}
          court2teamA={'TOP 2'}
          court2scoreA={0}
          court2teamB={'TOP 3'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'1:20 PM'}

          court1cat={'FIN'}
          court1teamA={'WINNER OF SF1'}
          court1scoreA={0}
          court1teamB={'WINNER OF SF2'}
          court1scoreB={0}
        />
      </div>
    </>
  )
}

export default ResultsDayTwo3x3
