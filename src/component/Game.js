import React, { Component } from 'react';
import GameScreen from './GameScreen';
import WebGL from './WebGL';


class Game extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         
      }
    }
    
    render() {
      return (
        <div className="game">
          {/*<GameScreen></GameScreen>*/}
          <WebGL></WebGL>
        </div>
      )
    }
}

export default Game;