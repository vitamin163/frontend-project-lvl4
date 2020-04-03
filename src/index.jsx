import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import App from './components/App/App';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


const chat = document.getElementById('chat');

export default (gon) => {
  store.dispatch(actions.initState({ ...gon }));
  render(<Provider store={store}><App /></Provider>, chat);
};
