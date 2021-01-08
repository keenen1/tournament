import React from 'react'

class TeamsOfTwelve extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cat: '',
      teams: [],
      name: '',
      players: [],
      w: 0,
      l: 0,
      opens: [
        {
          w: 1,
          l: 0,
          teamName: 'AZTIGS BETA',
          teamPlayers: ['Keenen Leyson', 'John Biluno', 'Reimar Cruz', 'Dennis Belmonte', 'Reggie Malonzo', 'Jette Anthony', 'Joseph Nunag', 'Brian Bugay', 'Ryan Herrera', 'Kenneth Tuffin', 'Nikko Malonzo', 'Jayvee Madic']
        },
        {
          w: 0,
          l: 1,
          teamName: 'OUA',
          teamPlayers: ['John Fabian', 'Mateo Manese', 'Emmanuel Cea', 'Denrick Arellano', 'Lorenzo Taduran', 'Sam Seniedo', 'Simoun Alumia', 'Anton Hilario', 'Randy Sjafrie', 'Christian Mata\'afa']
        },
        {
          w: 0,
          l: 0,
          teamName: 'BARAKO',
          teamPlayers: ['Anthony Eltanal', 'Adrianne Alegado', 'Niknik Esguerra', 'Morris Cabagnot', 'Crezlan Olivar', 'Joe Garcias', 'Jairus Evangelista', 'Simon Alumia', 'Kevin Elthanal', 'Brian Parejas', 'Justine Sapungan', 'Gian Dagum', 'Zwit Zal']
        },
        {
          w: 1,
          l: 0,
          teamName: 'UNKNOWN',
          teamPlayers: ['Eric Hansen', 'Aldwin Alvarez', 'Patrick Maagdenberg', 'Edward Maagdenberg', 'Emmanuel Maagdenberg', 'Robert Encarnacion', 'JD Tagimacruz', 'Aldrien Sepnio', 'Mike Becker', 'CJ Vellon', 'Lorenzo Tanduran']
        },
        {
          w: 0,
          l: 1,
          teamName: 'ROTORUA BONELESS',
          teamPlayers: ['Anjo Gabison', 'Nick Basinga', 'Triple J Garovillo', 'Jayson Conception', 'Carlo Yonyon', 'Chrisdale Danias', 'Elly Tibus', 'Van Mercado', 'Nicolas Aislabie', 'Leon Nebria', 'Nacar CN', 'Alvin Soqueno', 'Ronald Espellarga', 'Big Man']
        },
        {
          w: 0,
          l: 0,
          teamName: 'EAST STREET',
          teamPlayers: ['Aldin Corpuz', 'Luis Paraiso', 'Juan Salamanca', 'Jourdan Nitura', 'Manny Fausto', 'John Lopez', 'Levi Lucindo', 'Manolet Velasquez', 'Jolo Velasquez', 'Jonathan Tila', 'Redgie Padolina', 'Paul Fernandez', 'Kenneth Ebora', 'Jovin Ilagan']
        },
        {
          w: 1,
          l: 0,
          teamName: 'PHENOM',
          teamPlayers: ['JR Lumbag', 'Gideon Sarra', 'Gino Ruvas', 'Kino Ruvas', 'Bryan Ruvas', 'Jhay Salonga', 'Eric Guiao', 'Alex Aquino', 'Rhaym Hipolito', 'John Solomon', 'Andre Solomon']
        },
        {
          w: 0,
          l: 1,
          teamName: 'TRIPLE H MOTORS',
          teamPlayers: ['J Reyes', 'H Cabug', 'L Bajuyo', 'K Acosta', 'D Mauricio', 'B Aquino', 'C Lachica', 'J Mellejor', 'K Lagala', 'R Delumbria', 'J Robejes', 'J Cenita', 'W Sunnex', 'J Esguerra']
        },
        {
          w: 0,
          l: 0,
          teamName: 'BRICK CITY',
          teamPlayers: ['Daniel de Silva', 'Daryl Burias', 'Patrick Burias', 'Jan Latosa', 'Jordan Froilan', 'Mathew Marcelo', 'Ken Ganzan', 'Eron Caballes', 'Franz Lim', 'Mick Ramos', 'Chris Nallerda', 'Tyler Martin', 'Kevin de Paula', 'Jian De Vega', 'Andre Palomares']
        },
        {
          w: 1,
          l: 0,
          teamName: 'JBING',
          teamPlayers: ['Miguel Benjamin', 'Tyler Martin', 'James Viloria', 'Terrence Abdon', 'Jeff Lapinig', 'Ezekiel Flores', 'John Mongado', 'Franz Tipon', 'Marky Tipanero', 'Jonathan Vea', 'Jason Mamaradlo', 'Gio Tingson']
        },
        {
          w: 0,
          l: 1,
          teamName: 'WOW BISDAKOL',
          teamPlayers: ['Rey Burgos', 'Ricmar Paterbos', 'Jeremy Waay', 'Bjay Sagrado', 'Dodz Dalida', 'Andrew Lgar', 'Patrick Pag-ong', 'Richard Somostrada', 'Rad Ancla', 'Vincent Gambalan', 'Dante Salvador']
        },
        {
          w: 0,
          l: 0,
          teamName: 'PINOY PROPERTY',
          teamPlayers: ['Kienn Carzano', 'Tophie Patriarca', 'Jay Chua', 'Harold Jumawan', 'Carlo Bueno', 'Mar Libreja', 'Migs Jose', 'Jonathan Realista', 'Christian Lagunera', 'Bert Bolneo', 'Perry Salas', 'Bong Eldialde', 'Ken Eldialde', 'Tisoy Panbeyi']
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
      case 'opens':
        category = 'opens'
        break
    }
    this.setState({
      cat: this.props.cat,
      teams: this.state[category]
    })
  }

  render () {
    return (
      <div className="twelve col-12">
        <div className="divider">
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
        </div>
        <div className="divider">
          <div className="teams-block">
            <div className="pool">POOL C</div>
            <div className="team" onClick={() => this.changeTeam(this.state.teams[6])}>
              <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[6].teamName}</div>
              <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[6].w + '-' + this.state.teams[6].l)}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.teams[7])}>
              <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[7].teamName}</div>
              <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[7].w + '-' + this.state.teams[7].l)}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.teams[8])}>
              <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[8].teamName}</div>
              <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[8].w + '-' + this.state.teams[8].l)}</div>
            </div>
          </div>
          <div className="teams-block">
            <div className="pool">POOL D</div>
            <div className="team" onClick={() => this.changeTeam(this.state.teams[9])}>
              <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[9].teamName}</div>
              <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[9].w + '-' + this.state.teams[9].l)}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.teams[10])}>
              <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[10].teamName}</div>
              <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[10].w + '-' + this.state.teams[10].l)}</div>
            </div>
            <div className="team" onClick={() => this.changeTeam(this.state.teams[11])}>
              <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[11].teamName}</div>
              <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[11].w + '-' + this.state.teams[11].l)}</div>
            </div>
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

export default TeamsOfTwelve
