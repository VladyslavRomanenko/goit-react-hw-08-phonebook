import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});
