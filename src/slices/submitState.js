import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'submitState',
  initialState: 'init',
  reducers: {
    submitRequest(state, { payload: action }) {
      return `${action}_REQUEST`;
    },
    submitSuccess(state, { payload: action }) {
      return `${action}_SUCCESS`;
    },
    submitFailure(state, { payload: action }) {
      return `${action}_FAILURE`;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
