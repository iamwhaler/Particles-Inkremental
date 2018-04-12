import React from 'react';
import ReactDOM from 'react-dom';
import './global.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { PlayerClass } from './Player.js';

let Player = new PlayerClass();

function tick() {
  const element = (
  	<div>
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
   	</div>

);

  return element;
}

ReactDOM.unmountComponentAtNode(document.getElementById('assets-info'));

ReactDOM.render(tick(), document.getElementById('assets-info'));





registerServiceWorker();
