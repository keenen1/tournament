import React from 'react'

let u19arr = ['OUA', 'AZTIGS DELTA', 'PINOY MAVS', 'UFCSA WEST']
let u17arr = ['TGIF', 'UFCSA WEST', 'UFCSA NORTH', 'PINOY MAVS']
let u13arr = ['TGIF', 'UFCSA WEST A', 'UFCSA WEST B', 'PINOY MAVS']
let u11arr = ['FLAT BUSH BALLERS', 'TGIF', 'UFCSA WEST', 'PINOY MAVS']
let u9arr = ['FLAT BUSH BALLERS', 'TGIF', 'UFCSA WEST', 'PINOY MAVS']

const TeamsOfFour = (props) => {
  let chosenArray
  if (props.cat === 'u19') chosenArray = u19arr
  if (props.cat === 'u17') chosenArray = u17arr
  if (props.cat === 'u13') chosenArray = u13arr
  if (props.cat === 'u11') chosenArray = u11arr
  if (props.cat === 'u9') chosenArray = u9arr

  return (
    <div className="four">
      <div className="teams-block col-4">
        <div className="team">{chosenArray[0]}</div>
        <div className="team">{chosenArray[1]}</div>
        <div className="team">{chosenArray[2]}</div>
        <div className="team">{chosenArray[3]}</div>
      </div>
    </div>
  )
}

export default TeamsOfFour
