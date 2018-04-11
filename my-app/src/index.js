import React from 'react';
import ReactDOM from 'react-dom';
import './global.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('assets-info'));


registerServiceWorker();
