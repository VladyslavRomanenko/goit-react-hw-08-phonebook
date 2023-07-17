import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { privateApi } from 'redux/auth/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunk_Api) => {
    try {
      console.log(2);
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
      const { data } = await privateApi.post('/contacts', contact);
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
      const { data } = await privateApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
