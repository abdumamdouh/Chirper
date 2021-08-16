import React, { Component } from "react";

import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul>
          {this.props.tweetsIds.map((id) => (
            <li>{id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProp = ({ tweets }) => {
  return {
    tweetsIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
};

export default connect(mapStateToProp)(Dashboard);
