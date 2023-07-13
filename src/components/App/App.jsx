import css from './App.module.css';
import Filter from '../Filter/Filter';
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
