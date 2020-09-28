import React from 'react'
import TeamsOfEighteen from './TeamsOfEighteen'
import TeamsOfTwelve from './TeamsOfTwelve'
import TeamsOfEight from './TeamsOfEight'

class Teams extends React.Component {
  state = {
    cat: '',
    number: 0
  }

  number = (cat) => {
    switch (cat) {
      case 'opens':
        return 18
      case 'legends':
        return 12
      case '35a':
        return 8
      case 'u19':
        return 4
      case 'u17':
        return 4
      case 'u15':
        return 6
      case 'u13':
        return 4
      case 'u11':
        return 4
      case '9u':
        return 4
    }
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
        componentToRender = <TeamsOfEighteen />
        break
      case 'legends':
        componentToRender = <TeamsOfTwelve />
        break
      case '35a':
        componentToRender = <TeamsOfEight />
        break
      case 'u19':
        componentToRender = <TwelveTeams />
        break
      case 'u17':
        componentToRender = <TwelveTeams />
        break
      case 'u15':
        componentToRender = <TwelveTeams />
        break
      case 'u13':
        componentToRender = <TwelveTeams />
        break
      case 'u11':
        componentToRender = <TwelveTeams />
        break
      case '9u':
        componentToRender = <TwelveTeams />
        break
    }
    return (
      <>
        {componentToRender}
      </>
    )
  }
}

export default Teams
