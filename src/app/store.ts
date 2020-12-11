import { configureStore } from '@reduxjs/toolkit';
import playFieldReducer from '../features/playField/playFieldSlice';
import betReducer from '../features/bet/betSlice';
import drawsReducer from '../features/draws/drawsSlice';

export const store = configureStore({
  reducer: {
    playField: playFieldReducer,
    bet: betReducer,
    draws: drawsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
