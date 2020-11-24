import React from 'react'

class TeamsOfTwelve extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      aztigs: {
        w: 0,
        l: 0,
        teamName: 'AZTIGS BETA',
        teamPlayers: []
      },
      bisdakol: {
        w: 0,
        l: 0,
        teamName: 'BISDAKOL',
        teamPlayers: []
      },
      brick: {
        w: 0,
        l: 0,
        teamName: 'BRICK CITY',
        teamPlayers: []
      },
      rotorua: {
        w: 0,
        l: 0,
        teamName: 'ROTORUA',
        teamPlayers: []
      },
      hamilton: {
        w: 0,
        l: 0,
        teamName: 'HAMILTON',
        teamPlayers: []
      },
      unknown: {
        w: 0,
        l: 0,
        teamName: 'UNKNOWN',
        teamPlayers: []
      },
      barako: {
        w: 0,
        l: 0,
        teamName: 'BARAKO',
        teamPlayers: []
      },
      property: {
        w: 0,
        l: 0,
        teamName: 'PINOY PROPERTY',
        teamPlayers: []
      },
      eaststreet: {
        w: 0,
        l: 0,
        teamName: 'EAST STREET',
        teamPlayers: []
      },
      jbing: {
        w: 0,
        l: 0,
        teamName: 'JBING',
        teamPlayers: []
      },
      oua: {
        w: 0,
        l: 0,
        teamName: 'OUA',
        teamPlayers: []
      },
      wow: {
        w: 0,
        l: 0,
        teamName: 'WHEELS ON WEST',
        teamPlayers: []
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
      <div className="twelve col-12">
        <div className="divider">
          <div className="teams-block">
            <div className="pool">POOL A</div>
            <div className="team" onClick={() => this.changeTeam(this.state.aztigs)}>
              <div className="team-divider col-9">{this.state.aztigs.teamName}</div>
              <div className="standing col-3">{this.state.aztigs.w + '-' + this.state.aztigs.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.bisdakol)}>
              <div className="team-divider col-9">{this.state.bisdakol.teamName}</div>
              <div className="standing col-3">{this.state.bisdakol.w + '-' + this.state.bisdakol.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.brick)}>
              <div className="team-divider col-9">{this.state.brick.teamName}</div>
              <div className="standing col-3">{this.state.brick.w + '-' + this.state.brick.l}</div>
            </div>
          </div>
          <div className="teams-block">
            <div className="pool">POOL B</div>
            <div className="team" onClick={() => this.changeTeam(this.state.rotorua)}>
              <div className="team-divider col-9">{this.state.rotorua.teamName}</div>
              <div className="standing col-3">{this.state.rotorua.w + '-' + this.state.rotorua.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.hamilton)}>
              <div className="team-divider col-9">{this.state.hamilton.teamName}</div>
              <div className="standing col-3">{this.state.hamilton.w + '-' + this.state.hamilton.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.unknown)}>
              <div className="team-divider col-9">{this.state.unknown.teamName}</div>
              <div className="standing col-3">{this.state.unknown.w + '-' + this.state.unknown.l}</div>
            </div>
          </div>
        </div>
        <div className="divider">
          <div className="teams-block">
            <div className="pool">POOL C</div>
            <div className="team" onClick={() => this.changeTeam(this.state.barako)}>
              <div className="team-divider col-9">{this.state.barako.teamName}</div>
              <div className="standing col-3" style={{ color: '#DC602E' }}>{this.state.barako.w + '-' + this.state.barako.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.property)}>
              <div className="team-divider col-9">{this.state.property.teamName}</div>
              <div className="standing col-3">{this.state.property.w + '-' + this.state.property.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.eaststreet)}>
              <div className="team-divider col-9">{this.state.eaststreet.teamName}</div>
              <div className="standing col-3">{this.state.eaststreet.w + '-' + this.state.eaststreet.l}</div>
            </div>
          </div>
          <div className="teams-block">
            <div className="pool">POOL D</div>
            <div className="team" onClick={() => this.changeTeam(this.state.jbing)}>
              <div className="team-divider col-9">{this.state.jbing.teamName}</div>
              <div className="standing col-3">{this.state.jbing.w + '-' + this.state.jbing.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.oua)}>
              <div className="team-divider col-9">{this.state.oua.teamName}</div>
              <div className="standing col-3">{this.state.oua.w + '-' + this.state.oua.l}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.wow)}>
              <div className="team-divider col-9">{this.state.wow.teamName}</div>
              <div className="standing col-3">{this.state.wow.w + '-' + this.state.wow.l}</div>
            </div>
          </div>
        </div>
        <div id="overlay" onClick={this.props.overlayOff}>
          <div id="text">
            <div className="exit">x</div>
            <div className="team-name">{this.state.name}</div>
            <div className="team-info">
              <div>OPENS | {this.state.w}W - {this.state.l}L</div>
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

export default TeamsOfTwelve
