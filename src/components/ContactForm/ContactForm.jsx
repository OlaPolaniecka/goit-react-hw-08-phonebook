import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeFormName = e => {
    setName(e.target.value);
  };

  const handleChangeFormNumber = e => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <p className="title">Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChangeFormName}
        required
      />
      <p className="title">Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChangeFormNumber}
        required
      />
      <button className="btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
