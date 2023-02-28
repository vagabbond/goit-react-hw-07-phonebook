import { configureStore } from '@reduxjs/toolkit';

import { slice } from './slicePhoneBook';
import { sliceFilter } from './sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: slice.reducer,
    filter: sliceFilter.reducer,
  },
});
