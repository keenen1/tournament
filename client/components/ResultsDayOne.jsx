import React from 'react'
import ResultsHourly from './ResultsHourly'

const ResultsDayOne = () => {
  return (
    <>
      <div className="category-pane">DAY ONE</div>
      <div className="results-day">
        <ResultsHourly
          hour={'8AM'}

          court1cat={'U19'}
          court1teamA={'Aztigs Delta'}
          court1scoreA={98}
          court1teamB={'OUA'}
          court1scoreB={77}

          court2cat={'OP'}
          court2teamA={'Aztigs Beta'}
          court2scoreA={104}
          court2teamB={'Rangers'}
          court2scoreB={81}

          court3cat={'LGD'}
          court3teamA={'West Pa More'}
          court3scoreA={67}
          court3teamB={'Aztigs'}
          court3scoreB={73}

          court4cat={'U15'}
          court4teamA={'Genesis'}
          court4scoreA={56}
          court4teamB={'Pinoy Mavs'}
          court4scoreB={49}

          court5cat={'U9'}
          court5teamA={'TGIF'}
          court5scoreA={40}
          court5teamB={'UFCSA West'}
          court5scoreB={56}

          court6cat={'35A'}
          court6teamA={'Kiwi Roofing'}
          court6scoreA={67}
          court6teamB={'Barako East'}
          court6scoreB={66}
        />
        <ResultsHourly
          hour={'9AM'}

          court1cat={'U19'}
          court1teamA={'Aztigs Delta'}
          court1scoreA={98}
          court1teamB={'OUA'}
          court1scoreB={77}

          court2cat={'OP'}
          court2teamA={'Aztigs Beta'}
          court2scoreA={104}
          court2teamB={'Rangers'}
          court2scoreB={81}

          court3cat={'LGD'}
          court3teamA={'West Pa More'}
          court3scoreA={67}
          court3teamB={'Aztigs'}
          court3scoreB={73}

          court4cat={'U15'}
          court4teamA={'Genesis'}
          court4scoreA={56}
          court4teamB={'Pinoy Mavs'}
          court4scoreB={49}

          court5cat={'U9'}
          court5teamA={'TGIF'}
          court5scoreA={40}
          court5teamB={'UFCSA West'}
          court5scoreB={56}

          court6cat={'35A'}
          court6teamA={'Kiwi Roofing'}
          court6scoreA={67}
          court6teamB={'Barako East'}
          court6scoreB={66}
        />
      </div>
    </>
  )
}

export default ResultsDayOne
