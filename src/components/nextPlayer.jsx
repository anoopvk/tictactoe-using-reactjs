import React, { Component } from "react";
class NextPlayer extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Next to play: {this.props.nextPlayer}</p>
      </div>
    );
  }
}

export default NextPlayer;
