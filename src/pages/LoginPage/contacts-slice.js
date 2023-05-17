import { createSlice } from '@reduxjs/toolkit';

// import { addContact, fetchContacts, deleteContact } from 'redux/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63fda3861626c165a09c779c.mockapi.io/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.loading = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.loading = true;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload.id);
        store.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
