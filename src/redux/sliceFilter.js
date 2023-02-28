import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    change(state, action) {
      return action.payload;
    },
  },
});

export const { change } = sliceFilter.actions;
