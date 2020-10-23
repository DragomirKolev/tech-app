import { createSlice } from '@reduxjs/toolkit';

export const betSlice = createSlice({
  name: 'bet',
  initialState: {
    value: '1.00'
  },
  reducers: {
    setBet: (state, action) => {state.value = action.payload},
  },
});

export const { setBet } = betSlice.actions;

export const selectBet = state => state.bet.value;

export default betSlice.reducer;
