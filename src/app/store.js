import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from '../features/itemSlice'

export const store = configureStore({
  reducer: {
    item: itemsSlice
  }
});
