import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channels',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    initState(state, action) {
      const { channels } = action.payload;
      const allIds = channels.map((channel) => channel.id);
      const byId = channels.reduce((acc, channel) => ({ ...acc, [channel.id]: channel }), {});
      return { byId, allIds };
    },
  },

});

export const { actions } = slice;
export default slice.reducer;
