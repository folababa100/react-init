import React, { Component } from 'react';
import HomePage from '../components/homepage';
import { Switch, Route } from 'react-router-dom'

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
        </Switch>
      </div>
    )
  }
}
