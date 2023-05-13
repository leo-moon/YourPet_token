import { createAsyncThunk } from '@reduxjs/toolkit';

import * as authApi from './authApi';

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await authApi.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
