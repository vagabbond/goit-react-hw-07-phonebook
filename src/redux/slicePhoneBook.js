import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'phoneBook',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },
    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    [fetchContacts.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    [addContact.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload.id),
      };
    },
    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    [deleteContact.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
});
