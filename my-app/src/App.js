import React, { Component } from 'react';
import 'react-bootstrap';

import './App.css';
import './index.js';

import './global.js'

class App extends Component {
	constructor(props) {
	
	super(props);
	
	this.state = {

		gameSpeed: 1,

		tick: 0,

	}

	this.tick = this.tick.bind(this);

};

  render() {
    return (      
       <div> 
        <div id = "resetGame">
          <button>Reset game</button>
        </div>

        <div id = "saveGame">
          <button>Save game</button>
        </div>
        </div>
    );
  }
}

export default App;
