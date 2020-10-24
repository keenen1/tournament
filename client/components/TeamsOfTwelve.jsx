import React from 'react'

class TeamsOfTwelve extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: [],
      westPaMore: {
        w: 1,
        l: 0,
        teamName: 'WEST PA MORE',
        teamPlayers: ['Marlon De Leon', 'Dennis Macahilig', 'Joven Martinez', 'Jonatahn Lagasca', 'Rolando Nicolas', 'Ronald Tongol', 'Edwin Elago', 'Eric Hansen', 'Ryan Apdian', 'Boboi Luzano', 'Jolly Concepcion', 'Jancy  Gregorio', 'Ferdinand Manuel', 'Jay Salonga', 'Alfredo Sinang', 'Ernesto Bautista']
      },
      mavs: {
        w: 1,
        l: 0,
        teamName: 'MAVS',
        teamPlayers: ['George Dio', 'Allan Alombro', 'Jake Quilantang', 'Ricky Alano', 'Erick Basobas', 'Jimmy Tan', 'Mon Banno', 'Michael Salomon', 'Randy Bulaong', 'Ralph Gayatin', 'Jacob Terrafranca', 'Junar Zapata', 'Joel Yulo']
      },
      tgif1: {
        w: 1,
        l: 1,
        teamName: 'TGIF MAMBA',
        teamPlayers: ['Dennis Maga', 'Solito Asinas', 'Jay Saoi', 'Jockey Lorenzo', 'Leo Guico', 'Abet Tamayo', 'Aldwin Alvarez', 'Mitch Diputado', 'Angky Angeles', 'Rey Roque', 'Alfred Morales', 'Michael Mitra', 'Pogs Estonactor']
      },
      tgif2: {
        w: 0,
        l: 2,
        teamName: 'TGIF MENTALITY',
        teamPlayers: ['Cedric David', 'Efren Arellano', 'Niño Balani', 'Totoy Asinas', 'Larry Asuncion', 'Ipe Martinez', 'Ramon Aporillo', 'Denis Antiporda', 'Roque Alea', 'Bambi Zaide', 'Glenn Petilla', 'Jayson de Guzman']
      },
      kiwiroof: {
        w: 1,
        l: 0,
        teamName: 'KIWI ROOFING',
        teamPlayers: ['Jovit Naboa', 'Nestor Gamit', 'Third Osorio', 'Jambo Tabaquero', 'George Bautista', 'Fred danao', 'Elliot Zhornack', 'Randy da Silva', 'Edmond Quizon', 'Rodel Alan', 'Bong Quipte', 'Carlo Camus', 'Romel Bontongan', 'Nato Viray', 'Weni fernandez']
      },
      filkiwi: {
        w: 0,
        l: 2,
        teamName: 'FIL-KIWI',
        teamPlayers: ['Rojun Canes', 'Jun Sarito', 'Paul Siao', 'Ross Barin', 'Gerryl Agnes', 'Noriel Montemar', 'BJ Bauzon', 'Stan Ang', 'Clarence Pinpin', 'Chad Dumalaon', 'Cris Ulan', 'Elmer Luriz', 'Brian Manangan', 'Ryan Vidar']
      },
      southakl: {
        w: 1,
        l: 0,
        teamName: 'SOUTH AKL',
        teamPlayers: ['Ray Capal', 'Ro Pamisal', 'Will Esperanza', 'Jhong Calsona', 'Gibert Cayanan', 'Jovit Vidal', 'Jorden Armacio', 'Ben Soriano', 'Alex Rivera', 'Live Bana', 'Mark Sitchon', 'Kicko Cortez', 'Leon Nebria', 'Larry Draveno', 'Herbie Emralino']
      },
      sinulog: {
        w: 1,
        l: 0,
        teamName: 'UFCSA SINULOG',
        teamPlayers: ['Bob Miranda', 'Ross Ganzan', 'Alex Andales', 'Ramel Maligro', 'Nani Javate', 'Robert Turingan', 'Eric Braga', 'Tabudlong', 'Gilbert Tabora', 'Nino Solon', 'Joel Grafil', 'Marlon Ambion', 'Wennie Fernandez', 'Richard Cortes', 'Ivan Canlas', 'Jesse Abamonga']
      },
      aztigs: {
        w: 1,
        l: 0,
        teamName: 'AZTIGS',
        teamPlayers: ['Chicoy Leyson', 'Robbie Layao', 'Emman Sta Barbara', 'Rey Molina', 'Xean Moral', 'Grimson Treyes', 'Alan Almencion', 'Jhun Dalicun', 'Edbert Ancheta', 'Jhonny Arteza', 'Fidel Mabanta', 'Glenn Cruz', 'Marc Co', 'Rhandie Herrera']
      },
      ufcsawest: {
        w: 1,
        l: 0,
        teamName: 'UFCSA WEST',
        teamPlayers: ['Danny Sayat', 'Jun Alan', 'Michael Victa', 'Jun Manio', 'Dudz Pugosa', 'Rey Romales', 'Ernesto Bundalian', 'Karol Kwan Andrada', 'Chris Dela Torres', 'Rey Ocfemia', 'Bojo Ermita', 'Ricardo Luklukan', 'Thor Tejano', 'Joey Villa Ignacio']
      },
      barako: {
        w: 0,
        l: 2,
        teamName: 'BARAKO EAST',
        teamPlayers: ['Nieven Virtucio', 'Christian Sison', 'Ronaldo Liwanag', 'Ed Tacang', 'Felipe Talaid', 'Dane Porras', 'Junar Zapata', 'Gerry Ruelo', 'Hermie Espinosa', 'Arnold Laro', 'Wendyl Ong', 'Randy Gabunada']
      },
      auckland: {
        w: 0,
        l: 1,
        teamName: 'AUCKLAND',
        teamPlayers: ['Gio Abaya', 'Ricky Adubal', 'Ben Repalda', 'Edison Peralta', 'Ino Plaza', 'Reyn de la Rosa', 'Bong Sepnio', 'Aldrich Alviar', 'Mike Magisa', 'Eric Elago']
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
          <div className="team" onClick={() => this.changeTeam(this.state.westPaMore)}>
            <div className="team-divider col-9">WEST PA MORE</div>
            <div className="standing col-3">{this.state.westPaMore.w + '-' + this.state.westPaMore.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.mavs)}>
            <div className="team-divider col-9">PINOY MAVS</div>
            <div className="standing col-3">{this.state.mavs.w + '-' + this.state.mavs.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.tgif2)}>
            <div className="team-divider col-9">TGIF MENTALITY</div>
            <div className="standing col-3">{this.state.tgif2.w + '-' + this.state.tgif2.l}</div>
          </div>
        </div>
        <div className="teams-block col-4">
          <div className="pool">POOL B</div>
          <div className="team" onClick={() => this.changeTeam(this.state.kiwiroof)}>
            <div className="team-divider col-9">KIWI ROOFING</div>
            <div className="standing col-3">{this.state.kiwiroof.w + '-' + this.state.kiwiroof.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.filkiwi)}>
            <div className="team-divider col-9">FIL-KIWI</div>
            <div className="standing col-3">{this.state.filkiwi.w + '-' + this.state.filkiwi.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.southakl)}>
            <div className="team-divider col-9">SOUTH AKL</div>
            <div className="standing col-3">{this.state.southakl.w + '-' + this.state.southakl.l}</div>
          </div>
        </div>
        <div className="teams-block col-4">
          <div className="pool">POOL C</div>
          <div className="team" onClick={() => this.changeTeam(this.state.sinulog)}>
            <div className="team-divider col-9">UFCSA SINULOG</div>
            <div className="standing col-3">{this.state.sinulog.w + '-' + this.state.sinulog.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.tgif1)}>
            <div className="team-divider col-9">TGIF MAMBA</div>
            <div className="standing col-3">{this.state.tgif1.w + '-' + this.state.tgif1.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.auckland)}>
            <div className="team-divider col-9">AUCKLAND</div>
            <div className="standing col-3">{this.state.auckland.w + '-' + this.state.auckland.l}</div>
          </div>
        </div>
        <div className="teams-block col-4">
          <div className="pool">POOL D</div>
          <div className="team" onClick={() => this.changeTeam(this.state.aztigs)}>
            <div className="team-divider col-9">AZTIGS</div>
            <div className="standing col-3">{this.state.aztigs.w + '-' + this.state.aztigs.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.ufcsawest)}>
            <div className="team-divider col-9">UFCSA WEST</div>
            <div className="standing col-3">{this.state.ufcsawest.w + '-' + this.state.ufcsawest.l}</div>
          </div>
          <div className="team" onClick={() => this.changeTeam(this.state.barako)}>
            <div className="team-divider col-9">BARAKO EAST</div>
            <div className="standing col-3">{this.state.barako.w + '-' + this.state.barako.l}</div>
          </div>
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
