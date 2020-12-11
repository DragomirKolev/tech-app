import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BetState {
  value: string,
};

const initialState: BetState = {
  value: '1.00'
};

export const betSlice = createSlice({
  name: 'bet',
  initialState,
  reducers: {
    setBet: (state, { payload }: PayloadAction<string>) => 
      { state.value = payload },
  },
});

export const { setBet } = betSlice.actions;

export const selectBet = (state: { bet: BetState }) => state.bet.value;

export default betSlice.reducer;
