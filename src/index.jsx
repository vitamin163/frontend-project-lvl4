import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import faker from 'faker';
import io from 'socket.io-client';
import reducers, { actions } from './slices';
import App from './components/App';
import UserContext from './context/UserContext';

const {
  initState, addMessage, addChannel, renameChannel, removeChannel,
} = actions;

const userName = cookies.get('user') || { userName: faker.internet.userName(), avatar: faker.image.avatar() };
cookies.set('user', userName, { expires: 1 });

const port = process.env.PORT || 5000;


export default (gon) => {
  const store = configureStore({
    reducer: reducers,
  });

  const socket = io(`http://localhost:${port}`);
  socket.on('newMessage', (data) => store.dispatch(addMessage(data)));
  socket.on('newChannel', (data) => store.dispatch(addChannel(data)));
  socket.on('renameChannel', (data) => store.dispatch(renameChannel(data)));
  socket.on('removeChannel', (data) => store.dispatch(removeChannel(data)));
  store.dispatch(initState({ ...gon }));
  render(
    <Provider store={store}>
      <UserContext.Provider value={cookies.get('user')}>
        <App />
      </UserContext.Provider>
    </Provider>, document.getElementById('chat'),
  );
};
