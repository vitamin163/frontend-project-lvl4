import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { initState } from './actions';
import App from './components/App/App';


const store = configureStore({
  reducer: reducers,
});

const chat = document.getElementById('chat');

export default (gon) => {
  store.dispatch(initState({ ...gon }));
  render(<Provider store={store}><App /></Provider>, chat);
};
