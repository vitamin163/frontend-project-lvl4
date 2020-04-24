import { createSlice } from '@reduxjs/toolkit';
import { actions as channelsActions } from './channels';

const slice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage(state, { payload: { data: { attributes: message } } }) {
      state.push(message);
    },
  },
  extraReducers: {
    [channelsActions.initState](state, action) {
      return action.payload.messages;
    },
    [channelsActions.removeChannel](state, { payload: { data: { id } } }) {
      return state.filter((message) => message.channelId !== id);
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
