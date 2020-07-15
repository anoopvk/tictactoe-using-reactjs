import React, { Component } from "react";
import Reset from "./reset";
class Winner extends Component {
  state = {};
  render() {
    return (
      <div className={this.getclsname()}>
        <div className="resultbox">
            <p>{this.getcontent()}</p>
            <Reset handleReset={this.props.handleReset}/>
        </div>
      </div>
    );
  }
  getclsname = () => {
    let c = "result ";
    if (this.props.winner === "draw") {
      c += "draw ";
    } else if (this.props.winner === "X" || this.props.winner === "O") {
      c += "won ";
    } else {
      c += "hidden ";
    }
    return c;
  }
  getcontent=()=>{
    let c = "";
    if (this.props.winner === "draw") {
      c += "Draw ";
    } else if (this.props.winner === "X" || this.props.winner === "O") {
      c += this.props.winner + " won!!!! ";
    } else {
      c += " in progress ";
    }
    return c;
  }
}

export default Winner;
