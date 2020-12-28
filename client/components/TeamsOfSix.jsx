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
          teamPlayers: ['Bob Mir', 'Ross Ganzan', 'Alex Andales', 'Ramil Maligro', 'Richard Cortes', 'Marlon Ambion', 'Angelo Javate', 'Gilbert Tabora', 'Laurence Malbog', 'Bong Sepnio', 'Nixon Morales'],
          w: 0,
          l: 0
        },
        {
          teamName: 'AZTIGS',
          teamPlayers: ['Randolph Herrera', 'Carlo Leyson', 'Fidel Mabanta', 'Grimson Reyes', 'Alan Almencion', 'Jhonny Artesa', 'Joey Ilagan', 'Cesar Perez', 'Aldrich Alviar', 'Emmanuel Sta Barbara'],
          w: 0,
          l: 0
        },
        {
          teamName: 'FRANKLIN',
          teamPlayers: ['Cesar Narzo', 'Allan Murillo', 'Gigi Boy', 'Ranilo de la Cruz', 'Ike Francisco', 'Gerry Cristobal', 'Romel Ares', 'Anselmo Sacueza', 'Vincent Tapia', 'Ricky Chan'],
          w: 0,
          l: 0
        },
        {
          teamName: 'TGIF CALIBER 45',
          teamPlayers: ['Normin Asinas', 'Soliito Asinas', 'Mitz Diputado', 'Abet Tamayao', 'Dennis Maga', 'Larry Asuncion', 'Jocky Lorenzo', 'Efren Arellano', 'Felipe Martinez', 'Leo Guico', 'Micheal Mitra', 'Alfredo Morales'],
          w: 0,
          l: 0
        },
        {
          teamName: 'PINOY MAVS',
          teamPlayers: ['George Dio', 'Rodel Alan', 'Micheal Salomon', 'Jimmy Tan', 'Jacob Torrefranca', 'Joel Yulo', 'BJ Bauzon', 'Ferdinand Contreras', 'Manu Hoque', 'Elliot Zshornack', 'Erick Basobas', 'Jovit Naboa'],
          w: 0,
          l: 0
        },
        {
          teamName: 'WEST 7',
          teamPlayers: ['Jun Allan', 'Erik Luklukan', 'Jun Manio', 'Bojo Ermita', 'Ernesto Bundalian', 'Raul Lotivio', 'Rey Ocfemia', 'Danny Sayat', 'Jolly Concepcion', 'Ronald Tongol', 'Alfred Sinag', 'Dennis Macahig', 'Rolly Nicolas', 'John Senfelices', 'Jovy Martinez', 'Romy Guevarra', 'Jay Salonga'],
          w: 0,
          l: 0
        }
      ],
      u18: [
        {
          teamName: 'PINOY MAVS',
          teamPlayers: ['Red Viloria', 'Daniel Tialban', 'Jacob Banno', 'Angelo Matanguihan', 'JL Lopez', 'Val Mercado', 'JC Rebosura', 'Ralph Balazo', 'EJ Rebosura', 'Jaden Latay', 'Andre Yray', 'Andrei Salomon'],
          w: 0,
          l: 0
        },
        {
          teamName: 'UFCSA WEST TITIGAN',
          teamPlayers: ['Landon Smith', 'Seth Tantinco', 'Sebastian Alan', 'Kristopher Cerda', 'Mikal Maiquez', 'Keith Buenaflor', 'Lorenzo Credo', 'Miguel Balingit', 'Andre Sadsad'],
          w: 0,
          l: 0
        },
        {
          teamName: 'GENESIS',
          teamPlayers: ['Christian  Jatulan', 'Zeth Marcos', 'Zedrick Candor', 'Allain Santiago', 'Alexis Arizala', 'Al Alibahrani', 'Joshua Garcia', 'Ezekiel Garcia', 'Josch Magisa', 'John Villanueva', 'Lyndon Lucindo'],
          w: 0,
          l: 0
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['David Cobain', 'Jomari Maturan', 'Cromwell Pilacan', 'Kurt Guevara', 'Russell Pilacan', 'Zach Rafuson', 'Kurt Kempis', 'Ramon Villacarta', 'Homer Tuazon', 'Matt Mitra', 'Keane Co', 'Aidan King'],
          w: 0,
          l: 0

        },
        {
          teamName: 'UFCSA NORTH',
          teamPlayers: ['Lance Layao', 'Cyrus Grafil', 'Don Mallari', 'Ralph Fabriaga', 'Ralph Rapanan', 'Andrew Delco', 'Gian Cadag', 'Karl Amponin', 'Tony Lim', 'Jaden Perdido', 'Tristan Buenaventura', 'Ryan Fabian'],
          w: 0,
          l: 0
        },
        {
          teamName: 'UFCSA WEST ALPHA',
          teamPlayers: ['Gabriel de Guzman', 'Michael De Guzman', 'Christian Valencia', 'Francis Cabello', 'Tristan Allen', 'Amray De Asis', 'Jerald Gabornes', 'Benedict Magtibay', 'Alister Rapasa', 'Manuel Lagonera', 'Cedric Valencia'],
          w: 0,
          l: 0
        }
      ],
      u9: [
        {
          teamName: 'FLAT BUSH',
          teamPlayers: ['Josiah Book', 'Aaron Soretes', 'Allen Illustrisimo', 'Chase Lardizabal', 'Manuel Magallanes', 'Bryle Magayanes', 'Marcus Padua', 'Elaine Penaflor'],
          w: 0,
          l: 0
        },
        {
          teamName: 'UFCSA WEST',
          teamPlayers: ['Job Saberon', 'Tomas Agustin', 'Edward Yabut', 'Kobe Egrada', 'Gaevry Buenavista', 'Nathan Coronel', 'Luke de Guzman', 'Jarl Turno', 'Enzo Chuo', 'Aubrey Juan', 'River Okuya'],
          w: 0,
          l: 0
        },
        {
          teamName: 'KNIGHTS',
          teamPlayers: ['Draco Bornilla', 'Hiro Nonato', 'Tristan Longid', 'Arin Ganga', 'Lucas Ramos', 'Andres Mamerto', 'Marbrille Williams', 'Jacob Fabregas'],
          w: 0,
          l: 0
        },
        {
          teamName: 'PINOY MAVS',
          teamPlayers: ['Aldric Quilantang', 'Liam Crispino', 'Mateo Enricoso', 'Rafa Gayatin', 'Amhir Kuhutan', 'Kurt Pulac', 'Hugh Warren', 'Zayne Cabilin'],
          w: 0,
          l: 0
        },
        {
          teamName: 'STINGERS\'',
          teamPlayers: ['Jake Sinvitchit', 'Jiya Cruz', 'Grant Cruz', 'Isaaiah Philips', 'Issachar Philips', 'Jaden Volante', 'Elija Gusman', 'Nicos Rapanan', 'Marco Cardeno', 'Marcus Arroyo', 'Aiden Kierulf'],
          w: 0,
          l: 0
        },
        {
          teamName: 'TGIF',
          teamPlayers: ['Juancho De Guzman', 'Mateo Ilagan', 'Zander Mariano', 'Zeke Osigan', 'Vonn Villalobos', 'Reema Leneia', 'Kaiser Ochoa', 'Karlisle Ochoa'],
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
      case 'women':
        category = 'women'
        break
      case '40a':
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
