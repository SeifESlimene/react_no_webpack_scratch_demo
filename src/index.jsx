import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { resetContext, Provider } from 'kea';

resetContext({
  createStore: {},
  plugins: [],
});

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
