import React, { Component } from 'react'
import ContextB from './ContextB.js'

class ContextA extends Component {
  render() {
    return (
      <div>
        <h1>Context A Component</h1>
        <ContextB />
      </div>
    )
  }
}

export default ContextA
