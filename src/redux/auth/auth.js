import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-pet.onrender.com/',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post(
    '/api/auth/users/register',
    data
  );
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/api/auth/users/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/auth/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  try {
    const { data } = await instance.post('/api/auth/users/logout');
    setToken();
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
