import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import authReducer from 'redux/auth/auth-slice';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});
