import React from 'react'

class TeamsOfTwelve extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      westPaMore: {
        w: 0,
        l: 0,
        teamName: 'WEST PA MORE',
        teamPlayers: ['Marlon De Leon', 'Dennis Macahilig', 'Joven Martinez', 'Jonatahn Lagasca', 'Rolando Nicolas', 'Ronal Tongol', 'Edwin Elago', 'Eric Hansen', 'Ryan Apdian', 'Boboi Luzano', 'Jolly Concepcion', 'Jancy  Gregorio', 'Ferdinand Manuel', 'Jay Salonga', 'Alfredo Sinang', 'Ernesto Bautista']
      },
      mavs: {
        w: 0,
        l: 0,
        teamName: 'MAVS',
        teamPlayers: ['George Dio', 'Allan Alombro', 'Jake Quilantang', 'Ricky Alano', 'Erick Basobas', 'Jimmy Tan', 'Mon Banno', 'Michael Salomon', 'Randy Bulaong', 'Ralph Gayatin', 'Jacob Terrafranca', 'Junar Zapata', 'Joel Yulo']
      },
      tgif1: {
        w: 0,
        l: 0,
        teamName: 'TGIF MAMBA',
        teamPlayers: ['Dennis Maga', 'Solito Asinas', 'Jay Saoi', 'Jockey Lorenzo', 'Leo Guico', 'Abet Tamayo', 'Aldwin Alvarez', 'Mitch Diputado', 'Angky Angeles', 'Rey Roque', 'Alfred Morales', 'Michael Mitra', 'Pogs Estonactor']
      },
      tgif2: {
        w: 0,
        l: 0,
        teamName: 'TGIF MENTALITY',
        teamPlayers: ['Cedric David', 'Efren Arellano', 'Niño Balani', 'Totoy Asinas', 'Larry Asuncion', 'Ipe Martinez', 'Ramon Aporillo', 'Denis Antiporda', 'Roque Alea', 'Bambi Zaide', 'Glenn Petilla', 'Jayson de Guzman']
      },
      kiwiroof: {
        w: 0,
        l: 0,
        teamName: 'KIWI ROOFING',
        teamPlayers: ['Jovit Naboa', 'Nestor Gamit', 'Third Osorio', 'Jambo Tabaquero', 'George Bautista', 'Fred danao', 'Elliot Zhornack', 'Randy da Silva', 'Edmond Quizon', 'Rodel Alan', 'Bong Quipte', 'Carlo Camus', 'Romel Bontongan', 'Nato Viray', 'Weni fernandez']
      },
      filkiwi: {
        w: 0,
        l: 0,
        teamName: 'FIL-KIWI',
        teamPlayers: ['Rojun Canes', 'Jun Sarito', 'Paul Siao', 'Ross Barin', 'Gerryl Agnes', 'Noriel Montemar', 'BJ Bauzon', 'Stan Ang', 'Clarence Pinpin', 'Chad Dumalaon', 'Cris Ulan', 'Elmer Luriz', 'Brian Manangan', 'Ryan Vidar']
      },
      southakl: {
        w: 0,
        l: 0,
        teamName: 'SOUTH AKL',
        teamPlayers: ['Ray Capal', 'Ro Pamisal', 'Will Esperanza', 'Jhong Calsona', 'Gibert Cayanan', 'Jovit Vidal', 'Jorden Armacio', 'Ben Soriano', 'Alex Rivera', 'Live Bana', 'Mark Sitchon', 'Kicko Cortez', 'Leon Nebria', 'Larry Draveno', 'Herbie Emralino']
      },
      sinulog: {
        w: 0,
        l: 0,
        teamName: 'UFCSA SINULOG',
        teamPlayers: ['Bob Miranda', 'Ross Ganzan', 'Alex Andales', 'Ramel Maligro', 'Nani Javate', 'Robert Turingan', 'Eric Braga', 'Tabudlong', 'Gilbert Tabora', 'Nino Solon', 'Joel Grafil', 'Marlon Ambion', 'Wennie Fernandez', 'Richard Cortes', 'Ivan Canlas', 'Jesse Abamonga']
      },
      aztigs: {
        w: 0,
        l: 0,
        teamName: 'AZTIGS',
        teamPlayers: ['Chicoy Leyson', 'Robbie Layao', 'Emman Sta Barbara', 'Rey Molina', 'Xean Moral', 'Grimson Treyes', 'Alan Almencion', 'Jhun Dalicun', 'Edbert Ancheta', 'Jhonny Arteza', 'Fidel Mabanta', 'Glenn Cruz', 'Marc Co', 'Rhandie Herrera']
      },
      ufcsawest: {
        w: 0,
        l: 0,
        teamName: 'UFCSA WEST',
        teamPlayers: ['Danny Sayat', 'Jun Alan', 'Michael Victa', 'Jun Manio', 'Dudz Pugosa', 'Rey Romales', 'Ernesto Bundalian', 'Karol Kwan Andrada', 'Chris Dela Torres', 'Rey Ocfemia', 'Bojo Ermita', 'Ricardo Luklukan', 'Thor Tejano', 'Joey Villa Ignacio']
      },
      barako: {
        w: 0,
        l: 0,
        teamName: 'BARAKO EAST',
        teamPlayers: ['Nieven Virtucio', 'Christian Sison', 'Ronaldo Liwanag', 'Ed Tacang', 'Felipe Talaid', 'Dane Porras', 'Junar Zapata', 'Gerry Ruelo', 'Hermie Espinosa', 'Arnold Laro', 'Wendyl Ong', 'Randy Gabunada']
      },
      jokers: {
        w: 0,
        l: 0,
        teamName: 'JOKERS',
        teamPlayers: ['TBC']
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
      <div className="twelve col-12">
        <div className="teams-block col-4">
          <div className="pool">POOL A</div>
          <div className="team" onClick={() => this.changeTeam(this.state.westPaMore)}>WEST PA MORE</div>
          <div className="team" onClick={() => this.changeTeam(this.state.mavs)}>PINOY MAVS</div>
          <div className="team" onClick={() => this.changeTeam(this.state.tgif2)}>TGIF MENTALITY</div>
        </div>
        <div className="teams-block col-4">
          <div className="pool">POOL B</div>
          <div className="team" onClick={() => this.changeTeam(this.state.kiwiroof)}>KIWI ROOFING</div>
          <div className="team" onClick={() => this.changeTeam(this.state.filkiwi)}>FIL-KIWI</div>
          <div className="team" onClick={() => this.changeTeam(this.state.southakl)}>SOUTH AKL</div>
        </div>
        <div className="teams-block col-4">
          <div className="pool">POOL C</div>
          <div className="team" onClick={() => this.changeTeam(this.state.sinulog)}>UFCSA SINULOG</div>
          <div className="team" onClick={() => this.changeTeam(this.state.tgif1)}>TGIF MAMBA</div>
          <div className="team" onClick={() => this.changeTeam(this.state.jokers)}>JOKERS</div>
        </div>
        <div className="teams-block col-4">
          <div className="pool">POOL D</div>
          <div className="team" onClick={() => this.changeTeam(this.state.aztigs)}>AZTIGS</div>
          <div className="team" onClick={() => this.changeTeam(this.state.ufcsawest)}>UFCSA WEST</div>
          <div className="team" onClick={() => this.changeTeam(this.state.barako)}>BARAKO EAST</div>
        </div>
        <div id="overlay" onClick={this.props.overlayOff}>
          <div id="text">
            <div className="exit">x</div>
            <div className="team-name">{this.state.name}</div>
            <div className="team-info">
              <div>LEGENDS | {this.state.w}W - {this.state.l}L</div>
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
