import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IStateMenu } from './menu.interface';

const initialState: IStateMenu = {
  isOpenMenu: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenMenu = action.payload;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export const selectIsOpenMenu = (state: RootState) => state.menu.isOpenMenu;

export default menuSlice.reducer;
