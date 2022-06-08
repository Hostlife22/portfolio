import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import scaleReducer from '../features/scaleCV/scaleCVSlice';
import themeReducer from '../features/theme/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    scaleCV: scaleReducer,
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
