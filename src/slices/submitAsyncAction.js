import axios from 'axios';

import { actions as submitActions } from './submitState';

const { submitRequest, submitSuccess, submitFailure } = submitActions;

export default (method, data, url, resetForm) => async (dispatch) => {
  dispatch(submitRequest());
  try {
    await axios[method](url, { data });
    dispatch(submitSuccess());
    resetForm({});
  } catch (e) {
    dispatch(submitFailure());
    throw (e);
  }
};
