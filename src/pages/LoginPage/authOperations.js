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
export const getCurrent = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const current = authApi.getCurrent(auth.token);
      return current;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
