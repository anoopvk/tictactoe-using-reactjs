import React, { Component } from "react";
class Cell extends Component {
  state = {};
  render() {
  return <React.Fragment> <button className="cell" onClick={()=>this.props.handleClick(this.props.id)}>{this.props.cellstate} </button> </React.Fragment>;
  }
}


export default Cell;
