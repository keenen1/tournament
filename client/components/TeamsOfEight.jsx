import React from 'react'

class TeamsOfEight extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cat: '',
      teams: [],
      name: '',
      players: [],
      w: 0,
      l: 0,
      a35: [
        {
          teamName: 'BATANG HAMOG',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'AZTIGS 35',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'PILDI DAAN',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'BRICK CITY',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'TAMARONG',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'HUWEBES MAGINOOS',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'MAPUA CARDINALS',
          teamPlayers: [],
          w: 0,
          l: 0
        },
        {
          teamName: 'SAN REMEGIO',
          teamPlayers: [],
          w: 0,
          l: 0
        }
      ],
      u15: [
        {
          teamName: 'STINGERS\'',
          teamPlayers: ['Mathew Flordeliza', 'Nathan Flodeliza', 'Jaden Liwanang', 'Casey Bernas', 'Sean Sinvichit', 'Dayne Co', 'Nicole Rapanan', 'Rondo Ledesna', 'Keal Medina', 'Ethan Gallo', 'Ralph Placibe', 'Nikolai Queja', 'Trinity Kierulf'],
          w: 0,
          l: 0
        },
        {
          teamName: 'UFCSA WEST BLUE',
          teamPlayers: ['James Ybanez', 'Theo Martinez', 'Mavy Ruiz', 'Chester Segarra', 'Miguel Nantes', 'TJ Catilo', 'Kurvey Mendoza', 'Matthew Almado', 'Charlie Duncan', 'Celine Andrada', 'Andrea Dalay'],
          w: 0,
          l: 0
        },
        {
          teamName: 'UFCSA WEST BLACK',
          teamPlayers: ['Aldemiar Retuya', 'Liliane Yabut', 'Patrick Ocfemia', 'Rhamz dela Torre', 'Mattew Martin', 'Damien Chiu', 'Pilo Martinez', 'Ronnie Juan'],
          w: 0,
          l: 0
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Abigail Alea', 'EJ Aporillo', 'Dahren Arellano', 'Ralph Nardo', 'Tyrese Salas', 'Ram Gealon', 'Tristan Villafania', 'Sean Dipasupil', 'Ashton Ramos', 'Marcus Watson'],
          w: 0,
          l: 0

        },
        {
          teamName: 'PINOY MAVS 1',
          teamPlayers: ['Ivan Basobas', 'Bryan Bautista', 'Francis Bautista', 'Wayne Manalo', 'Melo Mangampat', 'Ali Nagi', 'Brennen Tapiador', 'Julian Viloria', 'Lorenzo Remedios', 'Nikki Buenaventura'],
          w: 0,
          l: 0
        },
        {
          teamName: 'PINOY MAVS 2',
          teamPlayers: ['Kian Manangan', 'Wayne Ragsac', 'Jacob Calacsan', 'Miharo Nepe', 'Albert Quilantang', 'Ken Manzanares', 'Chino Villa', 'Barry Quinico', 'Zander Cabiling', 'Zander Alviar', 'Edward Mercado', 'Kier Galgalan'],
          w: 0,
          l: 0
        },
        {
          teamName: 'KNIGHTS',
          teamPlayers: ['Aea Bautista', 'Hanz Lao', 'Marcus Alvaran', 'Gion Dalaudiao', 'Markaia Williams', 'Cedric Dimasuhid', 'Evan Valecruz', 'Seth Heruela', 'Gabriel Divina', 'Matteo Ortiz'],
          w: 0,
          l: 0
        },
        {
          teamName: 'FLAT BUSH',
          teamPlayers: ['Jacob Aguirre', 'Alistair Bautista', 'Miguel Cortez', 'Ryle Reyes', 'Mateo Duque', 'Edward Hicban', 'Edzel Lazatin', 'Paul Montemar', 'Yoshua Quedi', 'Cyrus Quizon', 'Elrick Ramos', 'Lennard Regala', 'Theo Vidar'],
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
      case '35a':
        category = 'a35'
        break
      case 'u15':
        category = 'u15'
        break
    }
    this.setState({
      cat: this.props.cat,
      teams: this.state[category]
    })
  }

  render () {
    return (
      <div className="eight">
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
          <div className="team" onClick={() => this.changeTeam(this.state.teams[3])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[3].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[3].w + '-' + this.state.teams[3].l)}</div>
          </div>
        </div>
        <div className="teams-block">
          <div className="pool">POOL B</div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[4])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[4].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[4].w + '-' + this.state.teams[4].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[5])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[5].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[5].w + '-' + this.state.teams[5].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[6])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[6].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[6].w + '-' + this.state.teams[6].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[7])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[7].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[7].w + '-' + this.state.teams[7].l)}</div>
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

export default TeamsOfEight
