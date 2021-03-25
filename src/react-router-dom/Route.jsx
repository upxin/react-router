import React, { Component } from 'react'
import { Consumer } from './context'

class Route extends Component {
  constructor() {
    super()
  }
  render() {
    const { path, component: Component } = this.props
    return (
      <Consumer>
        {value => {
          console.log(value,path)
          const pathname = value.location.pathname;
          if (pathname === path) {
            return <Component/>
          }
        }}
      </Consumer>
    )
  }
}

export default Route