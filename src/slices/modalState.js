import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
  name: 'modalState',
  initialState: false,
  reducers: {
    showModal(state, { payload }) {
      return payload;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
