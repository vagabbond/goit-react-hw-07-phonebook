import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const slice = createSlice({
  name: 'phoneBook',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
