import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

import counterReducers from './store/reducers/counters';
import resultReducers from './store/reducers/results';

const rootReducers = combineReducers({
   ctr: counterReducers,
   res: resultReducers
})


const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
