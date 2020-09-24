import React from 'react'
import EighteenTeams from './EighteenTeams'

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
    return (
      <>
        {/* <div style={{ color: 'black' }}>
          Category: {this.state.cat}
          Number of Teams: {this.state.number}
        </div> */}
        {this.state.cat === 'opens' ? <EighteenTeams/> : <div>default</div>}
      </>
    )
  }
}

export default Teams
