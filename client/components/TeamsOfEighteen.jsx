import React from 'react'

class TeamsOfEighteen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      aztigs: {
        teamName: 'Aztigs',
        teamPlayers: ['Keenen Leyson', 'Kenneth Tuffin', 'Joseph Nunag', 'Aaron Davis', 'Taine Davis', 'Reimar Cruz', 'Ryan Herrera', 'John Biluno', 'Dennis Belmonte', 'Regie Malonzo', 'Brian Bugay', 'Jonathan Tila']
      }
    }
    this.changeTeam = this.changeTeam.bind(this)
  }

  changeTeam = (team) => {
    this.setState({
      name: team.teamName,
      players: team.teamPlayers
    })
    this.props.overlayOn()
  }

  render () {
    return (
      <div className="eighteen col-12">
        <div className="teams-block col-3">
          {/* <div className="pool">POOL A</div> */}
          <div className="team">UNKNOWN</div>
          <div className="team">SLAYERS</div>
          <div className="team">JBING</div>
          <div className="team">BRICK CITY</div>
        </div>
        <div className="teams-block col-3">
          {/* <div className="pool">POOL B</div> */}
          <div className="team" onClick={() => this.changeTeam(this.state.aztigs)}>AZTIGS BETA</div>
          <div className="team">WOW 1</div>
          <div className="team">PINOY PROPERTY</div>
          <div className="team">MOUNT SISIG</div>
        </div>
        <div className="teams-block col-3">
          {/* <div className="pool">POOL C</div> */}
          <div className="team">PHENOM</div>
          <div className="team">TGIF</div>
          <div className="team">AUCKLANDER</div>
          <div className="team">AKL HEAT</div>
          <div className="team">FIL-KIWI</div>
        </div>
        <div id="overlay" onClick={this.props.overlayOff}>
          <div id="text">
            <div className="team-name">{this.state.name.toUpperCase()}</div>
            <div className="team-info">
              <div>Open | 6W - 0L</div>
            </div>
            <div className="player-container">
              <div className="player-list">
                {this.state.players.map((player, i) => {
                  return (
                    <div key={i}>
                      {i + 1 + '. ' + player}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamsOfEighteen
