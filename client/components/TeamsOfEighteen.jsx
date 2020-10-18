import React from 'react'

class TeamsOfEighteen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      aztigs: {
        teamName: 'AZTIGS',
        teamPlayers: ['Keenen Leyson', 'Kenneth Tuffin', 'Joseph Nunag', 'Aaron Davis', 'Taine Davis', 'Reimar Cruz', 'Ryan Herrera', 'John Biluno', 'Dennis Belmonte', 'Nikko Malonzo', 'Regie Malonzo', 'Brian Bugay', 'Jonathan Tila']
      },
      phenom: {
        teamName: 'PHENOM',
        teamPlayers: ['K. Ruvas', 'G. Ruvas', 'B. Ruvas', 'B. Eldialde', 'K. Eldialde', 'A. Solomon', 'J. Solomon', 'A. Aquino', 'G. Zarra', 'J. Salonga']
      },
      tgif: {
        teamName: 'TGIF',
        teamPlayers: ['Denrick arellano', 'Nicole Del Rosario', 'Franz Blanco', 'Harley De Rivera', 'Jed Ocampo', 'Josh Rivera', 'Kevin Lucas', 'Kim Estonactor', 'Rod Reyes King', 'Vincent Amiscua']
      },
      jbing: {
        teamName: 'JBING',
        teamPlayers: ['Tyler Martin', 'Ty Abdon', 'James Villoria', 'Matthew Malingin', 'Miguel Benjamin', 'Jeff Lapinig', 'Gio Tiongson', 'Mark Malingin', 'Cj Vellon', 'Eric Guiao', 'Marky Tipanero', 'Jasper Lapinig', 'John Mongado', 'Ezekiel Flores']
      },
      mount: {
        teamName: 'MOUNT SISIG',
        teamPlayers: ['Dexter Cantor', 'Lucero', 'Caburnay', 'Bjay Sagrado', 'Rick Perturbos', 'Rey Burgos', 'Ancla', 'Jeremy wong Waay', 'Cruz ', 'Castro', 'Vern', 'JDREW']
      },
      pinoy: {
        teamName: 'PINOY PROPERTY',
        teamPlayers: ['Kris Patriarca', 'Kien Carzano', 'Christian Lagunera', 'Carlo Bueno', 'Jomar Libreja', 'Patrick Pag-ong', 'Jay Chua', 'Jonathan Realista', 'Migs Jose', 'Perry Salas']
      },
      brick: {
        teamName: 'BRICK CITY',
        teamPlayers: ['Franz Lim', 'Jan Latosa', 'Daryl Burias', 'Patrick Burias', 'Josh Santos', 'Alex Santos', 'Eron Caballes', 'Andre Palomares', 'Ken Ganzan', 'Jordan Florian', 'Matthew Marcelo', 'Daniel De Silva', 'Richard Galang', 'Randy Sjafrie', 'Joshua De Silva']
      },
      unknown: {
        teamName: 'UNKNOWN',
        teamPlayers: ['Eric Hansen', 'Aldwin Alvarez', 'Patrick Maagdenberg', 'Emmanuel Maagdenberg', 'Edward Maagdenberg', 'JD Tagimacruz', 'John Fabian', 'Ross Ganzan', 'Jordan Perez', 'Aldrein Sepnio', 'Mark Arriba', 'Robert Encarnacion', 'Mark Torredes', 'Mike Becker']
      },
      aucklander: {
        teamName: 'AUCKLANDER',
        teamPlayers: ['Albert Quilbio', 'Nardz Botio', 'Teody Tangtang', 'Julius Orense', 'Rufino Padullon', 'Ronel Dumam-ag', 'Michael Baclig', 'Donald Yaun', 'Rino Mahinay', 'Michael Bancud', 'Randy Nicavera', 'Rogelio Blanco']
      },
      aklheat: {
        teamName: 'AKL HEAT',
        teamPlayers: ['Jan Aya-ay', 'Christian Razon', 'AC Alpad', 'John Paculaba', 'Mile Ridding', 'Weejay Manigo', 'David Ward', 'Ryvene Dela Cruz']
      },
      filkiwi: {
        teamName: 'FIL-KIWI',
        teamPlayers: ['Eric Book', 'Von Corpuz', 'Franz Tipon', 'Bry Padrigan', 'Mads Pascua', 'Julius Ingal', 'Roger Beringuel', 'Carlo Manahan', 'Sam Seneido', 'Jungler Bracero', 'Kennedy Magsilang', 'Rodel Roma']
      },
      slayers: {
        teamName: 'SLAYERS',
        teamPlayers: ['Luis Edward', 'Aldin Corpuz', 'Jolo Velasquez', 'John Kevin Lopez', 'Paul Joma Fernandez', 'Jourdan Nitura', 'Redgie', 'Manny Ross Fausto', 'Kenneth Rapio', 'Levi Lucindo', 'Juan Paulo Salamanca']
      },
      wow: {
        teamName: 'WHEELS ON WEST',
        teamPlayers: ['Joeki Libreja', 'Miguel Fernandez', 'Ken Fermin', 'Sean Cruz', 'Joler Lopez', 'Xyren Castro', 'Keanu Mason', 'Harold Jumawan', 'Simoun Alumia', 'Ferdie Foronda', 'Dante Salvador', 'Lorenzo Taduran', 'Phil  Two Haere']
      }
    }
    this.changeTeam = this.changeTeam.bind(this)
  }

  changeTeam = (team) => {
    this.setState({
      name: team.teamName,
      players: team.teamPlayers
    })
    this.props.overlayOn()
  }

  render () {
    return (
      <div className="eighteen col-12">
        <div className="teams-block col-3">
          <div className="pool">POOL A</div>
          <div className="team" onClick={() => this.changeTeam(this.state.unknown)}>UNKNOWN</div>
          <div className="team" onClick={() => this.changeTeam(this.state.aklheat)}>AKL HEAT</div>
          <div className="team" onClick={() => this.changeTeam(this.state.filkiwi)}>FIL-KIWI</div>
        </div>
        <div className="teams-block col-3">
          <div className="pool">POOL B</div>
          <div className="team" onClick={() => this.changeTeam(this.state.mount)}>MOUNT SISIG</div>
          <div className="team" onClick={() => this.changeTeam(this.state.pinoy)}>PINOY PROPERTY</div>
          <div className="team" onClick={() => this.changeTeam(this.state.brick)}>BRICK CITY</div>
        </div>
        <div className="teams-block col-3">
          <div className="pool">POOL C</div>
          <div className="team" onClick={() => this.changeTeam(this.state.aztigs)}>AZTIGS BETA</div>
          <div className="team" onClick={() => this.changeTeam(this.state.wow)}>WOW</div>
          <div className="team" onClick={() => this.changeTeam(this.state.aucklander)}>AUCKLANDER</div>
        </div>
        <div className="teams-block col-3">
          <div className="pool">POOL D</div>
          <div className="team" onClick={() => this.changeTeam(this.state.phenom)}>PHENOM</div>
          <div className="team" onClick={() => this.changeTeam(this.state.jbing)}>JBING</div>
          <div className="team" onClick={() => this.changeTeam(this.state.tgif)}>TGIF</div>
          <div className="team" onClick={() => this.changeTeam(this.state.slayers)}>SLAYERS</div>
        </div>
        <div id="overlay" onClick={this.props.overlayOff}>
          <div id="text">
            <div className="team-name">{this.state.name}</div>
            <div className="team-info">
              <div>Open | 0W - 0L</div>
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

export default TeamsOfEighteen
