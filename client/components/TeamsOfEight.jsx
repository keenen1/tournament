import React from 'react'

const TeamsOfEight = (props) => {
  return (
    <div className="eight col-12">
      <div className="teams-block col-6">
        {/* <div className="pool">POOL A</div> */}
        <div className="team">BRICK CITY</div>
        <div className="team">BARAKO EAST</div>
        <div className="team">UNKNOWN</div>
        <div className="team">MAPUA CARDINALS</div>
      </div>
      <div className="teams-block col-6">
        {/* <div className="pool">POOL B</div> */}
        <div className="team" >AZTIGS 35</div>
        <div className="team">WEST PA MORE</div>
        <div className="team">WEST SIDE BALLERS</div>
        <div className="team">SOUTH AUCKLAND</div>
      </div>
      {/* <div id="overlay" onClick={props.overlayOff}>
        <div id="text">Overlay Text</div>
      </div> */}
    </div>
  )
}

export default TeamsOfEight
