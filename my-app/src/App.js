import React, { Component } from 'react';
import 'react-bootstrap';
import './global.js'
import './App.css';
import './index.js';
import { Player } from './global.js';



class App extends Component {
	constructor(props) {
	super(props);
	};

	render() {

		console.log(Player);

		return <div>
            <div className = "row">
                <div className = "col-md-4">

                    <span>Protons: {Player.Protons} </span>
                    <span>Electrons: {Player.Electrons.toFixed(2)} </span>
                    <span>Neutrons: {Player.Neutrons} </span>


                </div>
                <div className = "col-md-4">
                    <span>Hydrogen: {Player.Hydrogen} </span>
                    <span>Helium: {Player.Helium} </span>

                </div>
            </div>


        </div>;
	}
}

export default App;