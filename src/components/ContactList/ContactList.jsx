import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { selectVisibleContacts } from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const handleRemoveContact = contact => {
    dispatch(deleteContact(contact.id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
          <button className="btn" onClick={() => handleRemoveContact(contact)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
