import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './transition/CSSTransition.css'
import './transition/SwitchTransition.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

