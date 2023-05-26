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


instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/auth/refresh', { refreshToken });
        setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        // error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);





export const signup = async data => {
  const { data: result } = await instance.post(
    '/api/auth/users/register',
    data
  );
  // setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/api/auth/users/login', data);
  // setToken(result.token);
  setToken(result.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
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
