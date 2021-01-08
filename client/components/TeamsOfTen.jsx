import React from 'react'

class TeamsOfTen extends React.Component {
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
          w: 0,
          l: 0,
          teamName: 'AZTIGS',
          teamPlayers: ['Robbie Layao', 'Davey Vinluan', 'PJY Ollimsoh', 'Jhonny Arteza', 'Fidel Mabanta', 'Garry Garcia', 'Adrian Bdunk', 'Jeric Mataverde', 'Ken Ken', 'John Rey Sequina', 'Elger de Guzman', 'James Mo', 'Marc Co', 'Wennie Fernandez', 'Duds Pugosa']
        },
        {
          w: 0,
          l: 0,
          teamName: 'PILDI DAAN',
          teamPlayers: ['Cyril Gencono', 'Randy Quijano', 'Mil Revillas', 'Allan Nardo', 'Jovinar Taboada', 'Rudy Gingco', 'Felipe Talaid', 'Ruben Dalagan', 'Jover Lacaba', 'Diole Celestial', 'Orlly Oyao', 'Noli Mondaya', 'Expidito Senillo', 'Rey Ricafranca', 'Dondon Pino', 'Alexis Benedicto']
        },
        {
          w: 0,
          l: 0,
          teamName: 'AUCKLAND ALPHA',
          teamPlayers: ['Ino Plaza', 'Ricky Adubal', 'Gio Abaya', 'Mike Magisa', 'Jep Latina', 'Ryen Dela Rosa', 'Edison Peralta', 'Ronald Ledesma', 'Glenn Cruz', 'Delbert Corpuz', 'Ben Repalda', 'Aldrich Alviar']
        },
        {
          w: 0,
          l: 0,
          teamName: 'TEAM BARAKO',
          teamPlayers: ['Nieven Virtucio', 'Lawrence Ledem', 'Dane Rapsorr', 'Ramir Gonzalez', 'Ruel Caceres', 'Armond  Banno', 'William Paa', 'Elmar Suplianas', 'Randy Bulaong', 'Macoy Pineda', 'Ronaldo Liwanag']
        },
        {
          w: 0,
          l: 0,
          teamName: 'MAPUA CARDINALS',
          teamPlayers: ['Donovan Bornilla', 'Ranville Marmeto', 'Edbert Ancheta', 'Mike Catapang', 'Herbert Bolneo', 'Rico Catilo', 'Rey Molina', 'Joey Tabuli', 'Rolando Rivera', 'Ronald Padilla', 'Peers Jardiel', 'Aran Silverio', 'Raymond Perfinan', 'Jay R Saoi']
        },
        {
          w: 0,
          l: 0,
          teamName: 'BATANG HAMOG',
          teamPlayers: ['Alfred Sinang', 'Boboi Lozano', 'Quing Panganiban', 'Alvin Mendoza', 'Marlon de Leon', 'Armin Minano', 'PJ Umayam', 'Arvin Renosa', 'Jonathan Lagasca', 'Andrew Cantiller', 'Macao', 'Ryan Apdian', 'Ely Oculete', 'Raymund Umandap', 'Perry Salas']
        },
        {
          w: 0,
          l: 0,
          teamName: 'FOREX NZ',
          teamPlayers: ['Robert Turingan', 'Nino Solon', 'Jesse Abamonga', 'Jeffrey Tan', 'Chris Ballerda', 'Ferdinand Manuel', 'Fidel Manalese', 'Gerome Ribu', 'Manny Fausto', 'Miko Escueta', 'Jehrone Valledor', 'Loeven Suzara', 'Rainier Escueta', 'JB Natividad', 'Ronald Ong']
        },
        {
          w: 0,
          l: 0,
          teamName: 'TEAM O\'REILLY\'s',
          teamPlayers: ['Chris Paderanga', 'Jece Bensi', 'Dan Martinez', 'Ben Marc', 'Carlo Isip', 'Melvin Dacyon', 'Jason Rigon', 'VJ Tabudlong', 'James Paluga', 'Eric Braga', 'Alan Jumawid', 'Eric Pastorpeli', 'Donnel Victorio', 'Ian Estrada']
        },
        {
          w: 0,
          l: 0,
          teamName: 'SOUTH AUCKLAND',
          teamPlayers: ['Rey Capal', 'Duds Pugosa', 'Herbie Emralino', 'Darel Pelayo', 'Ancha Ansiok', 'Restre Restre', 'Paul Hallare', 'Bert Cayanan', 'Lendel Kiamco', 'Alex Rivera', 'Adonis Dicksen', 'Leo Glorio', 'Greg Laro', 'Ardee Llasos', 'Ansel Sacueza', 'Kristian Catapang']
        },
        {
          w: 0,
          l: 0,
          teamName: 'SRBC',
          teamPlayers: ['Marc Arriba', 'Cyke Belandres', 'Ken Sharma', 'Phillip Sepulveda', 'Jong Mantos', 'Mark Torredes', 'Third Osorio', 'Mark Enriquez', 'Darwin Villaver']
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
    }
    this.setState({
      cat: this.props.cat,
      teams: this.state[category]
    })
  }

  render () {
    return (
      <div className="ten">
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
          <div className="team" onClick={() => this.changeTeam(this.state.teams[4])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[4].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[4].w + '-' + this.state.teams[4].l)}</div>
          </div>
        </div>
        <div className="teams-block">
          <div className="pool">POOL B</div>
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
          <div className="team" onClick={() => this.changeTeam(this.state.teams[8])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[8].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[8].w + '-' + this.state.teams[8].l)}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.teams[9])}>
            <div className="team-divider col-10">{this.state.teams.length > 0 && this.state.teams[9].teamName}</div>
            <div className="standing col-2">{this.state.teams.length > 0 && (this.state.teams[9].w + '-' + this.state.teams[9].l)}</div>
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

export default TeamsOfTen
