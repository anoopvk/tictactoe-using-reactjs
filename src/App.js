import React, { Component } from 'react';
import Board from './components/board';
import Reset from "./components/reset";
import NextPlayer from "./components/nextPlayer";
import Winner from "./components/winner";

class App extends Component {
  state = {
    boardstate: [null, null, null, null, null, null, null, null, null],
    nextplayer: "X",
    winner: null,
  }
  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Reset handleReset={this.handleReset} />
        <Board boardstate={this.state.boardstate} handleClick={this.handleClick} />
        <NextPlayer nextPlayer={this.state.nextplayer} />
        <Winner winner={this.state.winner} handleReset={this.handleReset} />



      </div>
    );
  }
  handleClick = (id) => {
    console.log("clicked", id);
    let bs = this.state.boardstate;
    let np = this.state.nextplayer;
    if (bs[id] === null) {
      bs[id] = np;
      np === "X" ? np = "O" : np = "X";
      this.setState({ boardstate: bs, nextplayer: np, winner: this.checkwin() });
    }
  }
  handleReset = () => {
    this.setState({
      boardstate: [null, null, null, null, null, null, null, null, null],
      nextplayer: "X",
      winner: null,
    });
  }



  checkwin = () => {
    let bs = this.state.boardstate;
    let winconditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winconditions.length; i++) {
      if (bs[winconditions[i][0]] !== null && bs[winconditions[i][0]] === bs[winconditions[i][1]] && bs[winconditions[i][1]] === bs[winconditions[i][2]]) {
        return (bs[winconditions[i][0]]);
      }
    }
    if (!bs.includes(null)) {
      return ("draw");
    }
    else {
      return null;
    }

  }
}

export default App;

