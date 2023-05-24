import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://your-pet.onrender.com/api/api',
});
export const deleteNotice = async id => {
  const { data } = await instance.delete(`/notices/${id}`);
  return data;
};


export const addToFavoriteNotices = async _id => {
  const { data } = await instance.patch(`notices/favorite/add/${_id}`);
  return data;
};

export const removeFromFavoriteNotices = async _id => {
  const { data } = await instance.patch(`notices/favorite/remove/${_id}`);
  return data;
};

export const fetchDeleteNotice = createAsyncThunk(
  'notice/delete',
  async (_id, { rejectWithValue }) => {
    try {
      await deleteNotice(_id);
      return _id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAddToFavorite = createAsyncThunk(
  'notices/add-favorite',
  async (_id, { rejectWithValue }) => {
    try {
      const data = await addToFavoriteNotices(_id);
    
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchRemoveFromFavorite = createAsyncThunk(
  'notices/remove-favorite',
  async (_id, { rejectWithValue }) => {
    try {
      const data = await removeFromFavoriteNotices(_id);
      console.log(data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);