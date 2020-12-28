import React from 'react'
// import TeamsOfEighteen from './TeamsOfEighteen'
import TeamsOfTwelve from './TeamsOfTwelve'
import TeamsOfEight from './TeamsOfEight'
import TeamsOfSix from './TeamsOfSix'
import TeamsOfTen from './TeamsOfTen'
import TeamsOfWomen from './TeamsOfWomen'
// import TeamsOfFour from './TeamsOfFour'

class Teams extends React.Component {
  state = {
    cat: '',
    number: 0
  }

  number = (cat) => {
    switch (cat) {
      case 'opens':
        return 18
      case '40a':
        return 6
      case '35a':
        return 10
      case 'u18':
        return 6
      case 'u15':
        return 8
      case 'u12':
        return 8
      case 'u9':
        return 6
    }
  }

  overlayOn = () => {
    document.getElementById('overlay').style.display = 'block'
  }

  overlayOff = () => {
    document.getElementById('overlay').style.display = 'none'
  }

  componentDidMount () {
    const cat = this.props.match.params.id
    const number = this.number(cat)
    this.setState({
      cat,
      number
    })
  }

  render () {
    let componentToRender
    switch (this.state.cat) {
      case 'opens':
        componentToRender = <TeamsOfTwelve overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
      case '40a':
        componentToRender = <TeamsOfSix overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
      case '35a':
        componentToRender = <TeamsOfTen overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
      case 'u18':
        componentToRender = <TeamsOfSix overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
      case 'u15':
        componentToRender = <TeamsOfEight overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
      case 'u12':
        componentToRender = <TeamsOfEight overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
      case 'u9':
        componentToRender = <TeamsOfSix overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
      case 'women':
        componentToRender = <TeamsOfWomen overlayOn={() => this.overlayOn()} overlayOff={() => this.overlayOff()} cat={this.state.cat} />
        break
    }
    return (
      <>
        <div className="category-pane">{this.state.cat.toUpperCase()}</div>
        {componentToRender}
      </>
    )
  }
}

export default Teams
