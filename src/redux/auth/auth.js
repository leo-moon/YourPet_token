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
  const { email, password } = data;
  const dataSent = { email, password };
  console.log(data);
  const { data: result } = await instance.post(
    '/api/auth/users/register',
    dataSent
  );
  // const { data: result } = await instance.post('/users/register', data);
  // setToken(result.token);
  localStorage.setItem('user', JSON.stringify(result));
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
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async token => {
  try {
    const { data } = await instance.post('/users/logout');
    setToken();
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
