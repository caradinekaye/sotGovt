import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/style.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();