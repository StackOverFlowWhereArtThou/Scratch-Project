import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage.js'
// import { SignupPage } from "./SignupPage.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/signup">
          <div>You are at signup</div>
          </Route>


          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    )
  }
}
