import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'submitState',
  initialState: 'init',
  reducers: {
    submitRequest() {
      return 'request';
    },
    submitSuccess() {
      return 'success';
    },
    submitFailure() {
      return 'failure';
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
