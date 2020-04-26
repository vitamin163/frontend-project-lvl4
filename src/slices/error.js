import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'error',
  initialState: 'init',
  reducers: {
    setError(state, { payload: error }) {
      return error;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
