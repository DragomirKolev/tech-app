import { createSlice } from '@reduxjs/toolkit';

export const playFieldSlice = createSlice({
  name: 'playField',
  initialState: {
    selected: [],
    max: 12,
  },
  reducers: {
    push: (state, action) => {
      state.selected.length < state.max && state.selected.push(action.payload);
    },
    filter: (state, action) => {
      state.selected = state.selected.filter(number => number !== action.payload)
    },
  },
});

export const { push, filter } = playFieldSlice.actions;

export const selectPlayFieldSelected = state => state.playField.selected;
export const selectIsMaxReached = state => state.playField.selected?.length === state.playField.max;

export default playFieldSlice.reducer;
