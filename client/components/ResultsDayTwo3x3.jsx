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
          court1scoreA={10}
          court1teamB={'HITZ'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'SOUTH AUCKLAND'}
          court2scoreA={0}
          court2teamB={'CASH CONVERTERS'}
          court2scoreB={16}
        />
        <ResultsHourly
          hour={'12:25 PM'}

          court1cat={'WOM'}
          court1teamA={'EL HOMBRES'}
          court1scoreA={6}
          court1teamB={'AIRBALLERS'}
          court1scoreB={7}
        />
        <ResultsHourly
          hour={'12:40 PM'}

          court1cat={'SF1'}
          court1teamA={'CASH CONVERTERS'}
          court1scoreA={19}
          court1teamB={'AIRBALLERS'}
          court1scoreB={2}

          court2cat={'SF2'}
          court2teamA={'UFCSA WEST'}
          court2scoreA={7}
          court2teamB={'SOUTH AUCKLAND'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'5:10 PM'}

          court1cat={'FIN'}
          court1teamA={'CASH CONVERTERS'}
          court1scoreA={6}
          court1teamB={'UFCSA WEST'}
          court1scoreB={7}
        />
      </div>
    </>
  )
}

export default ResultsDayTwo3x3
