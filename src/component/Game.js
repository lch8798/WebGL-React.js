import React, { Component } from 'react';
import GameScreen from './GameScreen';


class Game extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         
      }
    }
    
    render() {
      return (
        <div className="game">
          <GameScreen></GameScreen>
        </div>
      )
    }
}

export default Game;