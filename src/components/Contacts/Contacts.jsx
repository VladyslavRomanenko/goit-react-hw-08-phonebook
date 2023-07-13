import css from './Contacts.module.css';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { selectFilterSearch, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const visibleContacts = useSelector(selectFilterSearch);

  return (
    <>
      {isLoading && <Loader />}
      <div className={css.contacts}>
        <ul className={css.contactsList}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={css.contactListItem}>
              <div className={css.textContact}>
                <p className={css.contact}>{contact.name} : </p>
                <p className={css.contact}>{contact.number}</p>
              </div>
              <button
                className={css.contactDeleteBtn}
                onClick={() => dispatch(deleteContactThunk(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
