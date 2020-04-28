import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';
import chat from './index.jsx';
import '../assets/favicon.ico';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

chat(gon);
