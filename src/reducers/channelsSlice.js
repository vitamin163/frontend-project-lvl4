import { createSlice } from '@reduxjs/toolkit';
import { initState } from '../actions';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: { byId: {}, allIds: [] },
  reducers: {},
  extraReducers: {
    [initState](state, action) {
      const { channels } = action.payload;
      const allIds = channels.map((channel) => channel.id);
      const byId = channels.reduce((acc, channel) => ({ ...acc, [channel.id]: channel }), {});
      return { byId, allIds };
    },
  },

});


export default channelsSlice.reducer;
