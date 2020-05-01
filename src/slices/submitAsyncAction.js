import axios from 'axios';
// import { actions as submitActions } from './submitState';

// const { submitRequest, submitSuccess, submitFailure } = submitActions;

export default (method, data, url) => async () => {
  await axios[method](url, { data });
};
