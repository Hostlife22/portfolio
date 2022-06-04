import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getColor, getTheme } from './getTheme';
import { IThemeState, Theme, ThemeColors } from './theme.interface';

const initialState: IThemeState = {
  theme: getTheme(),
  color: getColor(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },

    setColor: (state, action: PayloadAction<ThemeColors>) => {
      state.color = action.payload;
    },
  },
});

export const { setTheme, setColor } = themeSlice.actions;

export const selectTeme = (state: RootState) => state.theme.theme;
export const selectColor = (state: RootState) => state.theme.color;

export default themeSlice.reducer;
