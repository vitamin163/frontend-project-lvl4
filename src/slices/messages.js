import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { actions as channelsActions } from './channels';

const slice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessageSuccess(state, action) {
      console.log(action.payload);
      return console.log('success');
    },
    addMessageFailure(state, action) {
      // console.log(action.payload);
      console.log('failure');
    },
  },
  extraReducers: {
    [channelsActions.initState](state, action) {
      return action.payload.messages;
    },
  },
});

const { addMessageSuccess, addMessageFailure } = slice.actions;

const addMessageActions = (message) => async (dispatch) => {
  const url = routes.channelMessagesPath(message.currentChannelId);
  console.log(url);
  try {
    const response = await axios.post(url, { data: message });
    dispatch(addMessageSuccess(response));
  } catch (e) {
    console.log(e);
    // dispatch(addMessageFailure(e));
  }
};


const actions = { ...slice.actions };
export { actions, addMessageActions };
export default slice.reducer;
