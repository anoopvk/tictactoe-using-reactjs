import React, { Component } from 'react';
class Reset extends Component {
    state = {  }
    render() { 
        return ( <div><button className="resetbutton" onClick={this.props.handleReset}>reset</button></div> );
    }
}
 
export default Reset;