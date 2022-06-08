import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IScaleCVState } from './scaleCV.interface';

const initialState: IScaleCVState = {
  iscv: false,
};

export const scaleCVSlice = createSlice({
  name: 'scaleCV',
  initialState,
  reducers: {
    scale: (state, action: PayloadAction<boolean>) => {
      state.iscv = action.payload;
    },
  },
});

export const { scale } = scaleCVSlice.actions;

export const selectScaleCV = (state: RootState) => state.scaleCV.iscv;

export default scaleCVSlice.reducer;
