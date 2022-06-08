import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IScaleCVState } from './scaleCV.interface';

const initialState: IScaleCVState = {
  isCV: false,
};

export const scaleCVSlice = createSlice({
  name: 'scaleCV',
  initialState,
  reducers: {
    scale: (state, action: PayloadAction<boolean>) => {
      state.isCV = action.payload;
    },
  },
});

export const { scale } = scaleCVSlice.actions;

export const selectScaleCV = (state: RootState) => state.scaleCV.isCV;

export default scaleCVSlice.reducer;
