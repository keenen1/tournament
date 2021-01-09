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
      u15: [
        {
          teamName: 'UFCSA WEST NANUH',
          teamPlayers: ['Kendrick Corpuz', 'Gerald Babatogon', 'Malacchi Book', 'Patrick Ermita', 'Andrei Manio', 'Ralph Ocfemia', 'Fonzee de Asis', 'Marfi Villar', 'Arien Sepnio', 'David Villa-Ignacio', 'Nathan David'],
          w: 2,
          l: 0
        },
        {
          teamName: 'PINOY MAVS 2',
          teamPlayers: ['Fonci Leyesa', 'Justin Lacsi', 'Enzo Lopez', 'Caleb Mendoza', 'Seb Sanchez', 'Xymuz Sitchon', 'John Lasala', 'Jan Matanguihan', 'Joaquin Marinas'],
          w: 0,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Steven Biasura', 'Johnray Biasura', 'Enrico De Guzman', 'Karl Alea', 'Jarredd Clarete', 'Kevin Hiyas', 'Cristian Perez', 'Emman Petilla', 'Alkurt Noval'],
          w: 0,
          l: 2
        },
        {
          teamName: 'GENESIS BOLT',
          teamPlayers: ['Gian Mohinani', 'Guile Mohinani', 'Joaquin Martinez', 'Jeremiah Guevarra', 'TJ Tecson', 'Cleeve Manlutac', 'Kevin Albo', 'Yam Tabudlong', 'Christian Gallo'],
          w: 2,
          l: 0
        },
        {
          teamName: 'PINOY MAVS 1',
          teamPlayers: ['Gabby Remedios', 'Mikara Nepe', 'Ethan Garcia', 'Claro Calvo', 'Moses Banno', 'Gio Manalo', 'Karlo Baltazar', 'Tomas Caluag', 'Jodek Lopez', 'Kurt Pasturan'],
          w: 1,
          l: 1
        },
        {
          teamName: 'UFCSA NORTH',
          teamPlayers: ['Adriel Javate', 'Albert Flores', 'Bobbie Atendido', 'Karlo Bernardo', 'Andre Atendido', 'Bien Pasco', 'Joel Vicente', 'Carlito Abaya', 'Theo Meer', 'Dhon Lao', 'Adrian Fabian'],
          w: 2,
          l: 0
        },
        {
          teamName: 'UFCSA WEST EAGLES',
          teamPlayers: ['Tj Laserna', 'Andre Bautista', 'Lawrence Dungan', 'Zhymon Moreno', 'Robbie Peeters', 'Mattim Coronel', 'Sway Tantinco', 'Airus Razon', 'Matt Fernandez', 'Gerard Bautista', 'Kurt Mendoza', 'Kyle Buenaflor'],
          w: 1,
          l: 1
        },
        {
          teamName: 'STREET BALLERS',
          teamPlayers: ['Lance Sta Barbara', 'James Capati', 'Marvin Capati', 'Patrick Afable', 'Zyril Mananquil', 'Duane Vallejos', 'Jhaey Jamelano', 'Gabriel Peralta', 'Steven Orio', 'Johann San Diego'],
          w: 0,
          l: 2
        }
      ],
      u12: [
        {
          teamName: 'PINOY MAVS 1',
          teamPlayers: ['Ivan Basobas', 'Bryan Bautista', 'Francis Bautista', 'Wayne Manalo', 'Melo Mangampat', 'Ali Nagi', 'Brennen Tapiador', 'Julian Viloria', 'Lorenzo Remedios', 'Nikki Buenaventura'],
          w: 2,
          l: 0
        },
        {
          teamName: 'KNIGHTS',
          teamPlayers: ['Aea Bautista', 'Hanz Lao', 'Marcus Alvaran', 'Gion Dalaudiao', 'Markaia Williams', 'Cedric Dimasuhid', 'Evan Valecruz', 'Seth Heruela', 'Gabriel Divina', 'Matteo Ortiz'],
          w: 1,
          l: 1
        },
        {
          teamName: 'UFCSA WEST BLACK',
          teamPlayers: ['Aldemiar Retuya', 'Liliane Yabut', 'Patrick Ocfemia', 'Rhamz dela Torre', 'Mattew Martin', 'Damien Chiu', 'Pilo Martinez', 'Ronnie Juan'],
          w: 1,
          l: 1
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Abigail Alea', 'EJ Aporillo', 'Dahren Arellano', 'Ralph Nardo', 'Tyrese Salas', 'Ram Gealon', 'Tristan Villafania', 'Sean Dipasupil', 'Ashton Ramos', 'Marcus Watson'],
          w: 0,
          l: 2

        },
        {
          teamName: 'UFCSA WEST BLUE',
          teamPlayers: ['James Ybanez', 'Theo Martinez', 'Mavy Ruiz', 'Chester Segarra', 'Miguel Nantes', 'TJ Catilo', 'Kurvey Mendoza', 'Matthew Almado', 'Charlie Duncan', 'Celine Andrada', 'Andrea Dalay'],
          w: 1,
          l: 1
        },
        {
          teamName: 'PINOY MAVS 2',
          teamPlayers: ['Kian Manangan', 'Wayne Ragsac', 'Jacob Calacsan', 'Miharo Nepe', 'Albert Quilantang', 'Ken Manzanares', 'Chino Villa', 'Barry Quinico', 'Zander Cabiling', 'Zander Alviar', 'Edward Mercado', 'Kier Galgalan'],
          w: 0,
          l: 2
        },
        {
          teamName: 'STINGERS\'',
          teamPlayers: ['Mathew Flordeliza', 'Nathan Flodeliza', 'Jaden Liwanang', 'Casey Bernas', 'Sean Sinvichit', 'Dayne Co', 'Nicole Rapanan', 'Rondo Ledesna', 'Keal Medina', 'Ethan Gallo', 'Ralph Placibe', 'Nikolai Queja', 'Trinity Kierulf'],
          w: 1,
          l: 1
        },
        {
          teamName: 'FLAT BUSH',
          teamPlayers: ['Jacob Aguirre', 'Alistair Bautista', 'Miguel Cortez', 'Ryle Reyes', 'Mateo Duque', 'Edward Hicban', 'Edzel Lazatin', 'Paul Montemar', 'Yoshua Quedi', 'Cyrus Quizon', 'Elrick Ramos', 'Lennard Regala', 'Theo Vidar'],
          w: 2,
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
      case 'u12':
        category = 'u12'
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
