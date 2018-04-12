import React, { Component } from 'react';
import 'react-bootstrap';
import './global.js'
import './App.css';
import './index.js';
import { PlayerClass } from './Player.js';


  let Player = new PlayerClass();
  class App extends Component {
	constructor(props) {
	
	super(props);




	this.state = {

		gameSpeed: 1,

		tick: 0,

	}

};



  render() {
    return;
  }
}

export default App;
