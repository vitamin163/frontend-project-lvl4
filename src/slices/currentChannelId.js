import { createSlice } from '@reduxjs/toolkit';
import { actions as channelsActions } from './channels';


const slice = createSlice({
  name: 'currentChannelId',
  initialState: 1,
  reducers: {
    channelSelection(state, { payload: { id } }) {
      console.log(id);
      return id;
    },
  },
  extraReducers: {
    [channelsActions.initState](state, action) {
      return action.payload.currentChannelId;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
