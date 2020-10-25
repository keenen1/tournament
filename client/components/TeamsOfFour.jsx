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
          teamPlayers: ['TJ Abdon', 'Tyler Martin', 'Jiggs Viloria', 'Angelo Matanguihan', 'Jairus Evangelista', 'Andrei Salomon', 'Louis Basobas', 'Christoff Reyes', 'Jacob Bano', 'Daniel Tialban', 'Red Viloria', 'Tyson Kempton'],
          w: 3,
          l: 0
        },
        {
          teamName: 'AZTIGS DELTA',
          teamPlayers: ['Reimar Cruz', 'Miggy Falqueza', 'Matt Malingin', 'Gian Cadag', 'Brian Bugay', 'Andrew Delco', 'Lance Layao', 'Val Mercado', 'Taine Davis', 'Jordan Perez'],
          w: 2,
          l: 1
        },
        {
          teamName: 'OUA',
          teamPlayers: ['Emman Cea', 'Matthew Manese', 'Edward Maagdenberg', 'Lorenzo Taduran', `Christian Mata'afa`, 'Si alumia', 'Denrick Arrelano', 'John Fabian'],
          w: 1,
          l: 2
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: ['Gabriel De Guzman', 'Michael De Guzman', 'Alister Repasa', 'Christian Valencia', 'Lorenzo Credo', 'Benedict Magtibay Jr', 'Francis Cabello', 'Francis Echano', 'Tristan Allen', 'Kristopher Cerda'],
          w: 0,
          l: 3
        }
      ],
      u17: [
        {
          teamName: 'MAVS',
          teamPlayers: ['Andrei Solomon', 'Jacob Banno', 'Daniel Tialban', 'Red Viloria', 'Ralph Balazo', 'Miguel Santoyo', 'JC Rebosura', 'EJ Rebosura', 'Elijah Rata', 'Andre Yray', 'Lui Villanueva', 'Andre Bonilla', 'Carsten Baring'],
          w: 3,
          l: 0
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: ['Amray De Asis', 'Keith Buenaflor', 'Angelo Llagonera', 'Francis Cabelo', 'Gerald Mulato', 'Kath Oracion', 'Landon Smith', 'Seth Tantinco', 'Malachi Book', 'Josh', 'Andrei Manio', 'Seb Alan', 'Alistair Repasa', 'Kris Cerda', 'Mike De Guzman'],
          w: 2,
          l: 1
        },
        {
          teamName: 'UFCSA NORTH',
          teamPlayers: ['Cyrus Grafil', 'Ralph Fabriaga', 'Don Mallari', 'Lance Layao', 'Keanne Co', 'Tristan Buenaventura', 'Ramon Villacarta', 'Kian Durney', 'Kurt Kempis', 'Jedrex Gannaban', 'Ralph Rapanan', 'Jaden Perdido'],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Jonathan Alfonso', 'Cobain David', 'Jomari Maturan', 'Cromwell Pilacan', 'Geane Andrade', 'David Tamayao', 'Kurt Guevarra', 'Pilacan Russel', 'Marfi Villar', 'Raghnall Villalonga', 'Enrico De Guzman'],
          w: 0,
          l: 3

        }
      ],
      u13: [
        {
          teamName: 'UFCSA WEST EAGLES',
          teamPlayers: ['Matti Coronel', 'Kyle Buenaflor', 'Laurence Dungan', 'TJ Laserna', 'Ronnie Juan', 'Sway Tantingco', 'Andre Bautista', 'Teofilo Martinez'],
          w: 3,
          l: 0
        },
        {
          teamName: 'MAVS',
          teamPlayers: ['Justin Lacsi', 'Fonci Leyesa', 'Enzo Lopez', 'Ivan Basobas', 'Bryan Bautista', 'caleb Mendoza', 'Seb Sanchez', 'Julian Viloria', 'Eon Yap', 'Keziah Gorme', 'Pia Rodas', 'Francis Bautista'],
          w: 2,
          l: 1
        },
        {
          teamName: 'UFCSA WEST TIGERS',
          teamPlayers: ['Damien Chiu', 'Lily Ermita', 'Kurt Mendoza', 'Airus Razon', 'Ashton Ermita', 'Matthew Martin', 'Patrick Ocfemia', 'Rhams Dela Torre'],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Karl Alea', 'Jarredd Clarete', 'Kevin Hiyas', 'Alkurt Noval', 'Emmanuel Petilla', 'Miggy Ricafrente', 'Ruadhan Villalonga', 'Dahren Arellano', 'Ralph Nardo', 'Ashton Ramos', 'Marcus Watson'],
          w: 0,
          l: 3

        }
      ],
      u11: [
        {
          teamName: 'FLAT BUSH',
          teamPlayers: ['Cyrus Quizon', 'Gian Miguel Cortez', 'Alistair Bautista', 'Yoshua Angelo Quedi', 'Jacob Aguirre', 'Theo Vidar', 'Mateo Duque', 'Matthieu Ramos', 'Edzel John Lazatin'],
          w: 3,
          l: 0
        },
        {
          teamName: 'MAVS',
          teamPlayers: ['Basty Banno', 'kodi Bornilla', 'jacob Calacsan', 'Kier Galgalan', 'Seth Herhuela', 'Kian Manangan', 'Ali Nagi', 'Wayna Ragsac', 'Lorenzo Remedios', 'Ken Manzanares', 'Hans Lao', 'Cedric Dimasuhid', 'Nikki Buenaventura', 'Marcus Alvaran', 'Melo Mangampat'],
          w: 2,
          l: 1
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: ['James Ybanez', 'Theo Martinez', 'Aldemair Retuya', 'Mavy Luriz', 'RV Abella', 'Chester Segarra', 'Liliane Yabut', 'Miguel Nantes', 'Tj Catilo', 'Kurvey Mendoza'],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Abigail Alea', 'EJ Aporillo', 'Dharen Arellano', 'Ynigo De Guzman', 'Ralph Nardo', 'Tyrese Salas', 'Jay Tristan Villafania', 'Marcus Watson', 'Ram Gealon'],
          w: 0,
          l: 3
        }
      ],
      u9: [
        {
          teamName: 'MAVS',
          teamPlayers: ['Aidan Cruz', 'Mateo Enricoso', 'Rafa Gayatin', 'Amihr Kuhutan', 'Kurt Pulac', 'Hugh Warren'],
          w: 3,
          l: 0
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: ['Edward Yabut', 'Jarl Turno', 'Lorenzo Chuo', 'Nathan Coronel', 'Job Saberon', 'Luke De Guzman', 'Tomas Agustin', 'Kobe Edrada', 'Charlie Duncan', 'Russel Hernandez'],
          w: 2,
          l: 1
        },
        {
          teamName: 'FLAT BUSH',
          teamPlayers: ['Chase Lardizabal', 'Nylbry Castillo', 'Liam Crispino', 'Manuel Magallanes', 'Vic Soretes', 'Liam Vidar', 'Trisha Penaflor', 'Mikhail Magayanes'],
          w: 1,
          l: 2
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Franco Calutan', 'Nicolas Dacanay', 'Juancho De Guzman', 'Raff Esmana', 'Mateo Ilagan', 'Zander Mariano', 'Zeke Osigan', 'Carl Ricafrente', 'Vonn Villalobos'],
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
