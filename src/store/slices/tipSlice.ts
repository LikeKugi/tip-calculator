import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITipSlice } from '@/store/slices/tipSlice.types';
import { RootState } from '@/store';

const initialState: ITipSlice = {
  bill: 0,
  error: '',
  tip: 0,
  people: 0,
}

export const tipSlice = createSlice({
  name: 'tips',
  initialState,
  reducers: {
    resetTips: () => initialState,
    setBill: (state, action: PayloadAction<number>) =>  {
      if (action.payload > 0) {
        state.bill = action.payload;
      } else {
        state.bill = 0;
      }
    },
    setTip: (state, action: PayloadAction<number>) => {
      if (action.payload > 0) {
        state.tip = action.payload;
      } else {
        state.tip = 0;
      }
    },
    setPeople: (state, action) => {
      if (action.payload > 0) {
        state.people = action.payload;
        state.error = ''
      } else {
        state.people = 0;
        state.error = "Can't be zero"
      }
    }
  },
})

export const selectBill = (state: RootState) => state.tip.bill;
export const selectTip = (state: RootState) => state.tip.tip;
export const selectPeople = (state: RootState) => state.tip.people;
export const selectError = (state: RootState) => state.tip.error;

export const {resetTips, setTip, setBill, setPeople} = tipSlice.actions;
export const TipReducer = tipSlice.reducer;
