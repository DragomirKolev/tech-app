import { createSlice } from '@reduxjs/toolkit';

export const drawsSlice = createSlice({
  name: 'draws',
  initialState: {
    value: 1
  },
  reducers: {
    setDraws: (state, action) => { state.value = action.payload },
  },
});

export const { setDraws } = drawsSlice.actions;

export const selectDraws = state => state.draws.value;

export default drawsSlice.reducer;
