import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'nothing',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) => 0, // Corrected reset reducer
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;