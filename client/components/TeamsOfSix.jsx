import React from 'react'

class TeamsOfSix extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      mavs: {
        w: 4,
        l: 0,
        teamName: 'MAVS A',
        teamPlayers: ['Carlo Baltazar', 'Moses Banno', 'Justin Calimbas', 'Claro Calvo', 'Tomas Caluag', 'Jodek Lopez', 'Joaquin Marinas', 'Ethan Garcia', 'Gabriel Peralta', 'Kimi Realon', 'Gabby Remedios', 'Jeremy Sasis', 'Jaden Latay', 'Kurt Pasturan', 'Kryz Mendoza']
      },
      ufcsawest: {
        w: 2,
        l: 1,
        teamName: 'UFCSA WEST',
        teamPlayers: ['Andrei Manio', 'Sebastian Alan', 'Ralph Ocfemia', 'Mikal Maiquez', 'Arien Sepnio', 'David Villa Ignacio', 'Gerald Babatogon', 'Kendrick Corpuz', 'Matt Fernandez', 'Robbie Peter', 'Zhymon Moreno', 'Malachi Book', 'Cedric Valencia']
      },
      ufcsanorth: {
        w: 1,
        l: 2,
        teamName: 'UFCSA NORTH',
        teamPlayers: ['Albert Flores', 'Bobbie Atendido', 'Bien Pasco', 'Karlo Bernardo', 'Adriel Javate', 'Joel Vicente', 'Andre Atendido', 'Angelo Abaya', 'Gian Mohinani', 'John Villanueva', 'Jhey Jamelano']
      },
      freelancer: {
        w: 1,
        l: 2,
        teamName: 'FREE LANCER',
        teamPlayers: ['Lance Sta Barbara', 'Reuben Capati', 'Marvin Capati', 'Raynald Afable', 'Edward Vallejos', 'Matthew Pangilinan', 'Luis de Guzman', 'Zyril Manquil', 'Dhenz Bryll Alajid', 'Yam Tabudlong']
      },
      tgif: {
        w: 0,
        l: 3,
        teamName: 'TGIF',
        teamPlayers: ['Geane Andrade', 'Johnray Biasura', 'Steven Biasura', 'Franchesca Calutan', 'Enrico De Guzman', 'EJ Maga', 'Raghnall Villalonga', 'Marfi Villar', 'Anton Zaide', 'Miggy Ricafrente', 'Emmanuel Petilla']
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
          <div className="team" onClick={() => this.changeTeam(this.state.mavs)}>
            <div className="team-divider col-9">PINOY MAVS A</div>
            <div className="standing col-3">{this.state.mavs.w + '-' + this.state.mavs.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.ufcsawest)}>
            <div className="team-divider col-9">UFCSA WEST</div>
            <div className="standing col-3">{this.state.ufcsawest.w + '-' + this.state.ufcsawest.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.freelancer)}>
            <div className="team-divider col-9">FREE LANCER</div>
            <div className="standing col-3">{this.state.freelancer.w + '-' + this.state.freelancer.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.ufcsanorth)}>
            <div className="team-divider col-9">UFCSA NORTH</div>
            <div className="standing col-3">{this.state.ufcsanorth.w + '-' + this.state.ufcsanorth.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.tgif)}>
            <div className="team-divider col-9">TGIF</div>
            <div className="standing col-3">{this.state.tgif.w + '-' + this.state.tgif.l}</div>
          </div>
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
