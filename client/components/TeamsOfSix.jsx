import React from 'react'

class TeamsOfSix extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      tgif: {
        w: 0,
        l: 0,
        teamName: 'TGIF',
        teamPlayers: ['Geane Andrade', 'Johnray Biasura', 'Steven Biasura', 'Franchesca Calutan', 'Enrico De Guzman', 'EJ Maga', 'Raghnall Villalonga', 'Marfi Villar', 'Anton Zaide', 'Miggy Ricafrente', 'Emmanuel Petilla']
      },
      ufcsawest: {
        w: 0,
        l: 0,
        teamName: 'UFCSA WEST',
        teamPlayers: ['Andrei Manio', 'Sebastian Alan', 'Ralph Ocfemia', 'Mikal Maiquez', 'Arien Sepnio', 'David Villa Ignacio', 'Gerald Babatogon', 'Kendrick Corpuz', 'Matt Fernandez', 'Robbie Peter', 'Zhymon Moreno', 'Malachi Book', 'Cedric Valencia']
      },
      mavs: {
        w: 0,
        l: 0,
        teamName: 'MAVS',
        teamPlayers: ['Carlo Baltazar', 'Moses Banno', 'Justin Calimbas', 'Claro Calvo', 'Tomas Caluag', 'Jodek Lopez', 'Joaquin Marinas', 'Ethan Garcia', 'Gabriel Peralta', 'Kimi Realon', 'Gabby Remedios', 'Jeremy Sasis', 'Jaden Latay', 'Kurt Pasturan', 'Kryz Mendoza']
      },
      ufcsanorth: {
        w: 0,
        l: 0,
        teamName: 'UFCSA NORTH',
        teamPlayers: ['Albert Flores', 'Bobbie Atendido', 'Bien Pasco', 'Karlo Bernardo', 'Angelo Javate', 'Joel Vicente', 'Andre Atendido', 'Angelo Abaya', 'Gian Mohinani', 'John Villanueva', 'Jhey Jamelano']
      },
      freelancer: {
        w: 0,
        l: 0,
        teamName: 'FREE LANCER',
        teamPlayers: ['Lance Sta Barbara', 'Reuben Capati', 'Marvin Capati', 'Raynald Afable', 'Edward Vallejos', 'Matthew Pangilinan', 'Luis de Guzman', 'Zyril Manquil', 'Dhenz Bryll Alajid', 'Yam Tabudlong']
      }
    }
    this.changeTeam = this.changeTeam.bind(this)
  }

  changeTeam = (team) => {
    this.setState({
      w: team.w,
      l: team.l,
      name: team.teamName,
      players: team.teamPlayers
    })
    this.props.overlayOn()
  }

  render () {
    return (
      <div className="six col-12">
        <div className="teams-block col-4">
          <div className="team" onClick={() => this.changeTeam(this.state.tgif)}>TGIF</div>
          <div className="team" onClick={() => this.changeTeam(this.state.ufcsawest)}>UFCSA WEST</div>
          <div className="team" onClick={() => this.changeTeam(this.state.mavs)}>PINOY MAVS</div>
          <div className="team" onClick={() => this.changeTeam(this.state.ufcsanorth)}>UFCSA NORTH</div>
          <div className="team" onClick={() => this.changeTeam(this.state.freelancer)}>FREE LANCER</div>
        </div>
        <div id="overlay" onClick={this.props.overlayOff}>
          <div id="text">
            <div className="exit">x</div>
            <div className="team-name">{this.state.name}</div>
            <div className="team-info">
              <div>U15 | {this.state.w}W - {this.state.l}L</div>
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

export default TeamsOfSix
