import React from 'react'
import { Link } from 'react-router-dom'

const win = { color: 'rgb(133, 201, 32)' }
const lose = { color: 'grey' }

const ResultGame = (props) => {
  return (
    <>
      {
        props.cat === 'WO'
          ? <div className="women-result">
            <Link to="/results/day-one/3x3" replace>
              Click for Women&apos;s
            </Link>
          </div>
          : <div className="court-result">
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
      }
    </>
  )
}

export default ResultGame
