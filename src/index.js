import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './components/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <Provider store = {store}>
    <App />
    </Provider>
  </HashRouter>, document.getElementById('app')
);
