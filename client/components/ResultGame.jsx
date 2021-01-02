import React from 'react'

const win = { color: 'rgb(133, 201, 32)' }
const lose = { color: 'grey' }

const ResultGame = (props) => {
  return (
    <div className="court-result col-4">
      <div className="court-result-cat">
        {props.cat}
      </div>
      <div className="court-result-teams">
        <div
          className="game-result underline"
          style={props.scoreA > props.scoreB ? win : lose}>
          <div className="court-result-team">{props.teamA}</div>
          <div className="court-result-score">{props.scoreA}</div>
        </div>
        <div
          className="game-result"
          style={props.scoreB > props.scoreA ? win : lose}>
          <div className="court-result-team">{props.teamB}</div>
          <div className="court-result-score">{props.scoreB}</div>
        </div>
      </div>
    </div>
  )
}

export default ResultGame
