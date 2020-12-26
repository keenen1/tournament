import React from 'react'

class TeamsOfFour extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cat: '',
      teams: [],
      name: '',
      players: [],
      w: 0,
      l: 0,
      u19: [
        {
          teamName: 'MAVS',
          teamPlayers: [],
          w: 3,
          l: 0
        },
        {
          teamName: 'AZTIGS DELTA',
          teamPlayers: [],
          w: 2,
          l: 1
        },
        {
          teamName: 'OUA',
          teamPlayers: [],
          w: 1,
          l: 2
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: [],
          w: 0,
          l: 3
        }
      ],
      u17: [
        {
          teamName: 'MAVS',
          teamPlayers: [],
          w: 3,
          l: 0
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: [],
          w: 2,
          l: 1
        },
        {
          teamName: 'UFCSA NORTH',
          teamPlayers: [],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: [],
          w: 0,
          l: 3

        }
      ],
      u13: [
        {
          teamName: 'UFCSA WEST EAGLES',
          teamPlayers: [],
          w: 3,
          l: 0
        },
        {
          teamName: 'MAVS',
          teamPlayers: [],
          w: 2,
          l: 1
        },
        {
          teamName: 'UFCSA WEST TIGERS',
          teamPlayers: [],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: [],
          w: 0,
          l: 3

        }
      ],
      u12: [
        {
          teamName: 'FLAT BUSH',
          teamPlayers: [],
          w: 3,
          l: 0
        },
        {
          teamName: 'MAVS',
          teamPlayers: [],
          w: 2,
          l: 1
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: [],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: [],
          w: 0,
          l: 3
        }
      ],
      u9: [
        {
          teamName: 'MAVS',
          teamPlayers: [],
          w: 3,
          l: 0
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: [],
          w: 2,
          l: 1
        },
        {
          teamName: 'FLAT BUSH',
          teamPlayers: [],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: [],
          w: 0,
          l: 3
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
      case 'u19':
        category = 'u19'
        break
      case 'u17':
        category = 'u17'
        break
      case 'u13':
        category = 'u13'
        break
      case 'u11':
        category = 'u11'
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
      <div className="four">
        <div className="teams-block col-8">
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
          <div className="team" onClick={() => this.changeTeam(this.state.teams[3])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[3].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[3].w + '-' + this.state.teams[3].l)}</div>
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

export default TeamsOfFour
