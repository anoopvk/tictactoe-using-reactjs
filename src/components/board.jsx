import React, { Component } from "react";
import Cell from "./cell";
class Board extends Component {
  state = {};
  render() {
    return (
      <div className="board">
        <div>
          <Cell id="0" cellstate={this.props.boardstate[0]} handleClick={this.props.handleClick}/>
          <Cell id="1" cellstate={this.props.boardstate[1]} handleClick={this.props.handleClick}/>
          <Cell id="2" cellstate={this.props.boardstate[2]} handleClick={this.props.handleClick}/>
        </div>
        <div>
          <Cell id="3" cellstate={this.props.boardstate[3]} handleClick={this.props.handleClick}/>
          <Cell id="4" cellstate={this.props.boardstate[4]} handleClick={this.props.handleClick}/>
          <Cell id="5" cellstate={this.props.boardstate[5]} handleClick={this.props.handleClick}/>
        </div>
        <div>
          <Cell id="6" cellstate={this.props.boardstate[6]} handleClick={this.props.handleClick}/>
          <Cell id="7" cellstate={this.props.boardstate[7]} handleClick={this.props.handleClick}/>
          <Cell id="8" cellstate={this.props.boardstate[8]} handleClick={this.props.handleClick}/>
        </div>
      </div>
    );
  }
}

export default Board;
