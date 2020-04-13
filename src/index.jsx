import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import faker from 'faker';
import reducers, { actions } from './slices';
import App from './components/App/App';
import UserContext from './components/UserContext';
// import io from 'socket.io-client';


const userName = cookies.get('user') || faker.internet.userName();

cookies.set('user', userName, { expires: 365 });

export default (gon) => {
  const store = configureStore({
    reducer: reducers,
  });


  store.dispatch(actions.initState({ ...gon }));
  render(
    <Provider store={store}>
      <UserContext.Provider value={cookies.get('user')}>
        <App />
      </UserContext.Provider>
    </Provider>, document.getElementById('chat'),
  );
};
