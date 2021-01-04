import React from 'react'
import ResultsHourly from './ResultsHourly'

const ResultsDayOne3x3 = () => {
  return (
    <>
      <div className="category-pane">DAY ONE &gt; 3x3</div>
      <div className="results-day">
        <ResultsHourly
          hour={'12:10 PM'}

          court1cat={'WOM'}
          court1teamA={'EL HOMBRES'}
          court1scoreA={0}
          court1teamB={'CASH CONVERTERS'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'UFCSA WEST'}
          court2scoreA={0}
          court2teamB={'SOUTH AUCKLAND'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'12:25 PM'}

          court1cat={'WOM'}
          court1teamA={'CASH CONVERTERS'}
          court1scoreA={0}
          court1teamB={'HITZ'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'SOUTH AUCKLAND'}
          court2scoreA={0}
          court2teamB={'AIRBALLERS'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'12:40 PM'}

          court1cat={'WOM'}
          court1teamA={'UFCSA WEST'}
          court1scoreA={0}
          court1teamB={'EL HOMBRES'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'AIRBALLERS'}
          court2scoreA={0}
          court2teamB={'HITZ'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'1:20 PM'}

          court1cat={'WOM'}
          court1teamA={'UFCSA WEST'}
          court1scoreA={0}
          court1teamB={'CASH CONVERTERS'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'SOUTH AUCKLAND'}
          court2scoreA={0}
          court2teamB={'EL HOMBRES'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'1:35 PM'}

          court1cat={'WOM'}
          court1teamA={'UFCSA WEST'}
          court1scoreA={0}
          court1teamB={'AIRBALLERS'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'SOUTH AUCKLAND'}
          court2scoreA={0}
          court2teamB={'HITZ'}
          court2scoreB={0}
        />
        <ResultsHourly
          hour={'1:50 PM'}

          court1cat={'WOM'}
          court1teamA={'EL HOMBRES'}
          court1scoreA={0}
          court1teamB={'HITZ'}
          court1scoreB={0}

          court2cat={'WOM'}
          court2teamA={'CASH CONVERTERS'}
          court2scoreA={0}
          court2teamB={'AIRBALLERS'}
          court2scoreB={0}
        />

      </div>
    </>
  )
}

export default ResultsDayOne3x3
