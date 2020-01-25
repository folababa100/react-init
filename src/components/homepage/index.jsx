import React, { Component } from 'react';

let socket;
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:3001'
    }
    socket = this.state.endpoint;
  }
  render() {
    return (
      <div>
        Welcome
      </div>
    )
  }
}
