import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(
      'https://65d223de987977636bfc00d6.mockapi.io/contacts/contacts'
    );
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contactData => {
    const response = await axios.post(
      'https://65d223de987977636bfc00d6.mockapi.io/contacts/contacts',
      contactData
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async contactId => {
    const response = await axios.delete(
      `https://65d223de987977636bfc00d6.mockapi.io/contacts/contacts/${contactId}`
    );
    return response.data.id;
  }
);
