import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import themeReducer from '../features/theme/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
