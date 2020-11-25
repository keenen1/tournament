import React from 'react'

class TeamsOfSix extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cat: '',
      teams: [],
      name: '',
      players: [],
      w: 0,
      l: 0,
      legends: [
        {
          teamName: 'UFCSA SINULOG',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'AZTIGS',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'PINOY MAVS',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'TGIF',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'FRANKLIN',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'TITIGAN BALLERS',
          teamPlayers: [],
          w: 0,
          l: 0
        }
      ],
      u18: [
        {
          teamName: 'UFCSA NORTH',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'GENESIS',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'TGIF',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'UFCSA WEST A',
          teamPlayers: [],
          w: 0,
          l: 0

        },
        {
          teamName: 'UFCSA WEST B',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'PINOY MAVS',
          teamPlayers: [],
          w: 0,
          l: 0
        }
      ],
      u9: [
        {
          teamName: 'KNIGHTS',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'TGIF',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'FBB',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: [],
          w: 0,
          l: 0

        },
        {
          teamName: 'UFCSA NORTH',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'PINOY MAVS',
          teamPlayers: [],
          w: 0,
          l: 0
        }
      ]
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

  componentDidMount () {
    let category
    switch (this.props.cat) {
      case 'legends':
        category = 'legends'
        break
      case 'u18':
        category = 'u18'
        break
      case 'u9':
        category = 'u9'
        break
    }
    this.setState({
      cat: this.props.cat,
      teams: this.state[category]
    })
  }

  render () {
    return (
      <div className="six">
        <div className="teams-block">
          <div className="pool">POOL A</div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[0])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[0].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[0].w + '-' + this.state.teams[0].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[1])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[1].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[1].w + '-' + this.state.teams[1].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[2])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[2].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[2].w + '-' + this.state.teams[2].l)}</div>
          </div>
        </div>
        <div className="teams-block">
          <div className="pool">POOL B</div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[3])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[3].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[3].w + '-' + this.state.teams[3].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[4])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[4].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[4].w + '-' + this.state.teams[4].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[5])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[5].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[5].w + '-' + this.state.teams[5].l)}</div>
          </div>
        </div>
        <div id="overlay" onClick={this.props.overlayOff}>
          <div id="text">
            <div className="exit">x</div>
            <div className="team-name">{this.state.name}</div>
            <div className="team-info">
              <div>{this.state.cat.toUpperCase()} | {this.state.w}W - {this.state.l}L</div>
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
