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
  },
});

export const { actions } = slice;
export default slice.reducer;
