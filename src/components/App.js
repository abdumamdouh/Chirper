import React, { Component } from "react";
import Dashboard from "./Dashboard";

import { connect } from "react-redux";

import handleInitialData from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <h1>zepy</h1>
        {this.props.loading ? null : <Dashboard />}
      </div>
    );
  }
}

const mapStateToProp = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProp)(App);
