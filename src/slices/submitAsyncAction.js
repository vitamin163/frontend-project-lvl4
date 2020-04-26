import axios from 'axios';
import { actions as submitActions } from './submitState';

const { submitRequest, submitSuccess, submitFailure } = submitActions;

export default (method, data, url, action) => async (dispatch) => {
  dispatch(submitRequest(action));
  try {
    await axios[method](url, { data });
    dispatch(submitSuccess(action));
  } catch (e) {
    dispatch(submitFailure(action));
    throw (e);
  }
};
