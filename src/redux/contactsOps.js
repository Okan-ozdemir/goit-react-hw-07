import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://68517cb48612b47a2c0a47ed.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('Fetch response:', response); // Debug için
      return response.data;
    } catch (e) {
      console.error('Fetch error:', e); // Debug için
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      console.log('Add response:', response); // Debug için
      return response.data;
    } catch (e) {
      console.error('Add error:', e); // Debug için
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log('Delete response:', response); // Debug için
      return id;
    } catch (e) {
      console.error('Delete error:', e); // Debug için
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
