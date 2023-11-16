import { combineReducers } from '@reduxjs/toolkit';
import { TipReducer } from '@/store/slices/tipSlice';

export const RootReducer = combineReducers({
  tip: TipReducer,
})
