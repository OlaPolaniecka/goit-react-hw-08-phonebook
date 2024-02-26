import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/operations';

import { selectVisibleContacts } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleAddContact = ({ id, name, number }) => {
    dispatch(addContact({ id, name, number }));
  };

  const handleRemoveContact = contact => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div>
      <h1 className="header">Phonebook</h1>
      <ContactForm onClick={handleAddContact} />
      <h1 className="header">Contacts</h1>
      <Filter />
      <ContactList contacts={visibleContacts} onClick={handleRemoveContact} />
    </div>
  );
};

export default App;
