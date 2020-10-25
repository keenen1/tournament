import React from 'react'

class TeamsOfEight extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      w: 0,
      l: 0,
      unknown: {
        w: 1,
        l: 2,
        teamName: 'UNKNOWN',
        teamPlayers: ['Eric Hansen', 'Perry Salas', 'Kerby Mendoza', 'George Gallos', 'Macao Kibtiani', 'Marc Arriba', 'Reil Abapo', 'Mark Torredes', 'Bjay Sagrado', 'DC Manuel', 'Jhay Salonga']
      },
      barako: {
        w: 0,
        l: 3,
        teamName: 'BARAKO',
        teamPlayers: ['RJ Jalit', 'Macoy Pineda', 'Kent Espana', 'Josh Lucero', 'Frederick Kampitan', 'Ruel Caceres', 'Elmar Supilanas', 'Raffy Buenaobra', 'Leopoldo Diga', 'Lawrence Medel']
      },
      southakl: {
        w: 2,
        l: 0,
        teamName: 'SOUTH AKL',
        teamPlayers: ['Jay Mariano', 'Jun Lacson', 'Jab Licera', 'Buboy Nebria', 'Pawex Atillo', 'Kicko Cortez', 'Gregor Lazo', 'Aj Cabugay', 'Jason Villagracia', 'Jette Bilog', 'Mark Sitchon', 'Paul Hallare', 'Ardee Llasos', 'Kenneth Navayra', 'Hebie Emralino']
      },
      mapua: {
        w: 3,
        l: 0,
        teamName: 'MAPUA CARDINALS',
        teamPlayers: ['Donovan Bornilla', 'Ranville Marmeto', 'Edbert Ancheta', 'Mike Catapang', 'Herbert Bolneo', 'Rico Catilo', 'Rey Molina', 'Joey Tabuli', 'Rolando Rivera', 'Ronald Padilla', 'Peers Jardiel', 'Raymund Perfinan', 'Allan Alombro']
      },
      aztigs: {
        w: 2,
        l: 1,
        teamName: 'AZTIGS 35',
        teamPlayers: ['Davey Vinluan', 'PJY Ollimsoh', 'Elger De Guzman', 'Jep Lat', 'Garry', 'Menax Go', 'Adrian Bdunk', 'Jeric Mataverde', 'Leandro Jose', 'John Rey Sequina', 'Ken Ken', 'Rhandie Herrera']
      },
      brick: {
        w: 3,
        l: 0,
        teamName: 'BRICK CITY',
        teamPlayers: ['Fidel Manelese', 'Jeffrey Tan', 'Carlo Spenser', 'Rhaym Hipolito', 'Gerome Ribu', 'Ballerda Chris', 'Robert Turingan', 'Jerhone Valledore', 'Abamonga Jesse', 'Nino Solon', 'Olivar Emmanuel', 'Goldie Perez']
      },
      westpa: {
        w: 1,
        l: 2,
        teamName: 'WEST PA MORE',
        teamPlayers: ['Alfred Sinang', 'QF Panganiban', 'Marlon de Leon', 'Arvin Renosa', 'PJ Umayam', 'Zander Peroja', 'Ely Oculam', 'Ryan Facelo', 'Andrew Cantiller', 'Juan Umandap', 'Alvin Mendoza', 'Marlon Turno', 'Mar Joe Alcantara']
      },
      westside: {
        w: 0,
        l: 3,
        teamName: 'WEST SIDE BALLERS',
        teamPlayers: ['CJ Famo', 'Enrique Dimdim', 'Benjamin Plaras', 'Joven Mandac Andes', 'Boyong Freeman', 'Vin Scent', 'MC Calma', 'Marlan Pedutem', 'Ferds Ba-Sil', 'Allan Dumrique', 'Mark Fernandico']
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
      <div className="eight col-12">
        <div className="teams-block col-6">
          <div className="pool">POOL A</div>
          <div className="team" onClick={() => this.changeTeam(this.state.southakl)}>
            <div className="team-divider col-9">SOUTH AKL</div>
            <div className="standing col-3">{this.state.southakl.w + '-' + this.state.southakl.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.mapua)}>
            <div className="team-divider col-9">MAPUA CARDINALS</div>
            <div className="standing col-3">{this.state.mapua.w + '-' + this.state.mapua.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.unknown)}>
            <div className="team-divider col-9">UNKNOWN</div>
            <div className="standing col-3">{this.state.unknown.w + '-' + this.state.unknown.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.barako)}>
            <div className="team-divider col-9">BARAKO EAST</div>
            <div className="standing col-3">{this.state.barako.w + '-' + this.state.barako.l}</div>
          </div>
        </div>
        <div className="teams-block col-6">
          <div className="pool">POOL B</div>
          <div className="team" onClick={() => this.changeTeam(this.state.brick)}>
            <div className="team-divider col-9">BRICK CITY</div>
            <div className="standing col-3">{this.state.brick.w + '-' + this.state.brick.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.aztigs)}>
            <div className="team-divider col-9">AZTIGS 35</div>
            <div className="standing col-3">{this.state.aztigs.w + '-' + this.state.aztigs.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.westpa)}>
            <div className="team-divider col-9">WEST PA MORE</div>
            <div className="standing col-3">{this.state.westpa.w + '-' + this.state.westpa.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.westside)}>
            <div className="team-divider col-9">WEST SIDE BALLERS</div>
            <div className="standing col-3">{this.state.westside.w + '-' + this.state.westside.l}</div>
          </div>
        </div>
        <div id="overlay" onClick={this.props.overlayOff}>
          <div id="text">
            <div className="exit">x</div>
            <div className="team-name">{this.state.name}</div>
            <div className="team-info">
              <div>35A | {this.state.w}W - {this.state.l}L</div>
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
