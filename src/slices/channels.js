import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channels',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    addChannel(state, { payload: { data: { attributes: channel } } }) {
      const updateById = { ...state.byId, [channel.id]: channel };
      const updateAllIds = [...state.allIds, channel.id];
      return { byId: updateById, allIds: updateAllIds };
    },
    renameChannel(state, { payload: { data: { attributes: channel } } }) {
      const updateById = { ...state.byId, [channel.id]: channel };
      return { ...state, byId: updateById };
    },
    initState(state, { payload }) {
      const { channels } = payload;
      const allIds = channels.map((channel) => channel.id);
      const byId = channels.reduce((acc, channel) => ({ ...acc, [channel.id]: channel }), {});
      return { byId, allIds };
    },
  },

});

export const { actions } = slice;
export default slice.reducer;
