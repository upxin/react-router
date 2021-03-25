import React, { Component } from 'react'
import { Provider } from './context'
import { createHashHistory } from 'history'

class Router extends Component {
  history = createHashHistory()
  constructor() {
    super()
    this.state = {
      location: {
        pathname: this.history.location.pathname || '/'
      }
    }
  }
  componentDidMount() {
    this.history.listen(location => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: location.pathname
        }
      })
    });
  }
  render() {
    const { location } = this.state
    const value = { location }
    console.log('hashRouter', value)
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export default Router