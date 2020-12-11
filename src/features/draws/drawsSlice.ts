import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawsState {
  value: number | null,
};

const initialState: DrawsState = {
  value: 1,
};

export const drawsSlice = createSlice({
  name: 'draws',
  initialState,
  reducers: {
    setDraws: (state, { payload }: PayloadAction<number | null>) => 
      { state.value = payload },
  },
});

export const { setDraws } = drawsSlice.actions;

export const selectDraws = (state: { draws: DrawsState }) => state.draws.value;

export default drawsSlice.reducer;
