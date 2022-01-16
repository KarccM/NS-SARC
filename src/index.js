import React from 'react';
import ReactDOM from 'react-dom';
import WarehouseApp from './container/warehouseApp';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.css';
import './styles/main.css';
import './styles/material.css';

ReactDOM.render(
  <Provider store={store}>
    <WarehouseApp />
  </Provider>,
  document.getElementById('root')
);
