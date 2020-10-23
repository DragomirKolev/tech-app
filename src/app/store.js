import { configureStore } from '@reduxjs/toolkit';
import playFieldReducer from '../features/playField/playFieldSlice';
import betReducer from '../features/bet/betSlice';
import drawsReducer from '../features/draws/drawsSlice';
import commentsReducer from '../features/comments/commentsSlice';

export default configureStore({
  reducer: {
    playField: playFieldReducer,
    bet: betReducer,
    draws: drawsReducer,
    comments: commentsReducer,
  },
});
