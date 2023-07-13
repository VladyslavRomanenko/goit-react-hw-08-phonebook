import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './operations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  isError: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContactsThunk.pending]: state => {
      state.isLoading = true;
      state.isError = null;
    },
    [fetchContactsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [fetchContactsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [addContactThunk.pending]: state => {
      state.isLoading = true;
      state.isError = null;
    },
    [addContactThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [addContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [deleteContactThunk.pending]: state => {
      state.isLoading = true;
      state.isError = null;
    },
    [deleteContactThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { getFilter } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
