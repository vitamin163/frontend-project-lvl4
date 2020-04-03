import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';
import gon from 'gon';
import chat from './index.jsx';
// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
chat(gon);
console.log('it works!');
console.log('gon', gon);
