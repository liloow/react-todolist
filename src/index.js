// @flow

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App} from './App';
import reducer from './reducers';
import './index.css';
const root = document.getElementById('root');

if (!root) {
  throw Error('No root element found in index.html');
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
