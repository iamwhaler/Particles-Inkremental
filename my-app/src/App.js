import React, { Component } from 'react';
import 'react-bootstrap';
import './global.js'
import './App.css';
import './index.js';


class App extends Component {
	constructor(props) {
	
	super(props);

	this.state = {

		gameSpeed: 1,

		tick: 0,

	}
};

  render() {
    return (      
        <div class = "row">
        <div class = "col-md-4">
          

          <span>Protons: ${this.Player.Protons} </span> 
          <span>Electrons: ${this.Player.Electrons.toFixed(2)} </span>       
          <span>Neutrons: ${this.Player.Neutrons} </span>


        </div>
        <div class = "col-md-4">
          <span>Hydrogen: ${this.Player.Hydrogen} </span>
          <span>Helium: ${this.Player.Helium} </span>          

        </div>
      </div> 

    );
  }
}

export default App;
