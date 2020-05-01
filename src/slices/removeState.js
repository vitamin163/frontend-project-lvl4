import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'removeState',
  initialState: 'init',
  reducers: {
    removeRequest() {
      return 'REMOVE_CHANNEL_REQUEST';
    },
    removeSuccess() {
      return 'REMOVE_CHANNEL_SUCCESS';
    },
    removeFailure() {
      return 'REMOVE_CHANNEL_FAILURE';
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
