import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { instance } from 'redux/auth/api';
import { selectAuth } from 'redux/auth/selector';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunk_Api) => {
    const isAuth = useSelector(selectAuth);
    try {
      // if (isAuth) {
      const { data } = await instance.get('/contacts');
      return data;
      // }
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunk_Api) => {
    try {
      const { data } = await instance.post('/contacts', contact);
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
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
