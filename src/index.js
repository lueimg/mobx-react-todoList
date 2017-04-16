import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import store from './App/TodoStore';


ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
