import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
  name: 'modalState',
  initialState: { show: false },
  reducers: {
    showModal(state, { payload }) {
      return payload;
    },
    closeModal(state) {
      return { ...state, show: false };
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
