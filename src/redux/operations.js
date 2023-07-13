import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64ae8ae5c85640541d4d434c.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunk_Api) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunk_Api) => {
    try {
      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunk_Api) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
