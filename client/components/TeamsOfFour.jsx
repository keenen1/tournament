import React from 'react'

let u19arr = ['OUA', 'PINOY MAVS', 'AZTIGS DELTA', 'UFCSA WEST']
let u17arr = ['TGIF', 'PINOY MAVS', 'UFCS NORTH', 'UFCSA WEST']
let u13arr = ['TGIF', 'UFCSA WEST A', 'PINOY MAVS', 'UFCSA WEST B']
let u11arr = ['FLAT BUSH BALLERS', 'TGIF', 'PINOY MAVS', 'UFCSA WEST']
let u9arr = ['FLAT BUSH BALLERS', 'TGIF', 'PINOY MAVS', 'UFCSA WEST']

const TeamsOfFour = (props) => {
  let chosenArray
  if (props.cat === 'u19') chosenArray = u19arr
  if (props.cat === 'u17') chosenArray = u17arr
  if (props.cat === 'u13') chosenArray = u13arr
  if (props.cat === 'u11') chosenArray = u11arr
  if (props.cat === 'u9') chosenArray = u9arr

  return (
    <div className="four">
      <div className="teams-block">
        <div className="pool">DOUBLE ROUND ROBIN</div>
        <div className="team">{chosenArray[0]}</div>
        <div className="team">{chosenArray[1]}</div>
        <div className="team">{chosenArray[2]}</div>
        <div className="team">{chosenArray[3]}</div>
      </div>
    </div>
  )
}

export default TeamsOfFour
