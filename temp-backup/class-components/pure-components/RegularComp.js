import React, { Component } from 'react';

class RegularComp extends Component {
  render() {
    console.log("Regular Component")
    return (
      <>
        <h2>Regular Component - {this.props.username}</h2>
      </>
    );
  }
}

export default RegularComp;
