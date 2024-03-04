import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
