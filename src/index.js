import React from 'react';
//para aplicaciones web
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
//simulador de bbdd
import registerServiceWorker from './registerServiceWorker';

//reactDom -> enfocado a aplicacion web y la ejecuta
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
