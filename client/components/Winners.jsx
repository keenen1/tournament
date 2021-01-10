import React from 'react'
import ResultsHourly from './ResultsHourly'

const Winners = () => {
  return (
    <>
      <div className="category-pane">WINNERS</div>
      <div className="results-day">
        <ResultsHourly
          winners={true}
          hour={'WOMEN\'S CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'UFCSA WEST'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'CASH CONVERTERS'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
        <ResultsHourly
          winners={true}
          hour={'9U CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'TBC'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'TBC'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
        <ResultsHourly
          winners={true}
          hour={'12U CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'TBC'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'TBC'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
        <ResultsHourly
          winners={true}
          hour={'15U CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'TBC'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'TBC'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
        <ResultsHourly
          winners={true}
          hour={'18U CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'TBC'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'TBC'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
        <ResultsHourly
          winners={true}
          hour={'OPEN\'S CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'TBC'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'TBC'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
        <ResultsHourly
          winners={true}
          hour={'35A CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'TBC'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'TBC'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
        <ResultsHourly
          winners={true}
          hour={'45A CHAMPIONSHIP'}

          court1cat={'1st'}
          court1teamA={'TBC'}
          court1scoreA={null}
          court1teamB={''}
          court1scoreB={null}

          court3cat={'2nd'}
          court3teamA={'TBC'}
          court3scoreA={null}
          court3teamB={''}
          court3scoreB={null}
        />
      </div>
    </>
  )
}

export default Winners
