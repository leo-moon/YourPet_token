import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://your-pet.onrender.com/api',
});

export const fetchOurFriends = createAsyncThunk(
  'ourFriends/fetchOurFriends',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.get('/friends', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
