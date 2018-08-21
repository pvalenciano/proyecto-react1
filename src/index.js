import React from 'react';
//para aplicaciones web
import ReactDOM, { render } from 'react-dom';

import './index.css';
import App from './App';
//simulador de bbdd
import registerServiceWorker from './registerServiceWorker';
//routes
import AppRoutes from './routes';

import { BrowserRouter as Router } from 'react-router-dom';
//reactDom -> enfocado a aplicacion web y la ejecuta

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
render(
    <Router>
        <AppRoutes />
    </Router>, 
    document.getElementById('root')
);