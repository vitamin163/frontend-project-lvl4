import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannel(state, { payload: { data: { attributes: channel } } }) {
      state.push(channel);
    },
    renameChannel(state, { payload: { data: { attributes: { id, name } } } }) {
      const currentChannel = state.find((channel) => channel.id === id);
      currentChannel.name = name;
    },
    removeChannel(state, { payload: { data: { id } } }) {
      return state.filter((channel) => channel.id !== id);
    },
    initState(state, { payload: { channels } }) {
      return channels;
    },
  },

});

export const { actions } = slice;
export default slice.reducer;
