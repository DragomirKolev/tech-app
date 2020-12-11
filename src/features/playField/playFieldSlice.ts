import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayFieldState {
  selected: Array<number>,
  max: number,
}

const initialState: PlayFieldState = {
  selected: [],
  max: 12,
}

export const playFieldSlice = createSlice({
  name: 'playField',
  initialState,
  reducers: {
    push: (state, { payload }: PayloadAction<number>) => {
      state.selected.length < state.max && state.selected.push(payload);
    },
    filter: (state, { payload }: PayloadAction<number>) => {
      state.selected = state.selected.filter(number => number !== payload)
    },
  },
});

export const { push, filter } = playFieldSlice.actions;

export const selectPlayFieldSelected = (state: { playField: PlayFieldState }) => state.playField.selected;
export const selectIsMaxReached = (state: { playField: PlayFieldState }) =>
  state.playField.selected?.length === state.playField.max;

export default playFieldSlice.reducer;
