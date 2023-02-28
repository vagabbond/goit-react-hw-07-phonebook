import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(
      'https://63fd54d8859df29986cd5ef3.mockapi.io/contacts/contacts'
    );
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async data => {
    const response = await axios.post(
      'https://63fd54d8859df29986cd5ef3.mockapi.io/contacts/contacts',
      data
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(
      `https://63fd54d8859df29986cd5ef3.mockapi.io/contacts/contacts/${id}`
    );
    return response.data;
  }
);
