import React from 'react';
import ReactDOM from 'react-dom';
import './global.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Player } from './global.js';



function Tick() {


    this.setState({electrons: this.state.electrons+1});

};


ReactDOM.render(<App />, document.getElementById('assets-info'));



registerServiceWorker();
