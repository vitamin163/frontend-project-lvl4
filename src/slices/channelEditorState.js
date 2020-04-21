/* import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const slice = createSlice({
  name: 'channelEditorState',
  initialState: 'init',
  reducers: {
    editChannelRequest() {
      return 'request';
    },
    editChannelSuccess() {
      return 'success';
    },
    editChannelFailure() {
      return 'failure';
    },
  },
});

const { editChannelRequest, editChannelSuccess, editChannelFailure } = slice.actions;

const addChannelAction = (name) => async (dispatch) => {
  const url = routes.channelsPath();
  dispatch(submitMessageRequest());
  try {
    await axios.post(url, { data });
    dispatch(submitMessageSuccess());
    resetForm({});
  } catch (e) {
    dispatch(submitMessageFailure());
    throw (e);
  }
};

export default slice.reducer;
*/
