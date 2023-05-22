import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-pet.onrender.com/api',
});

export const fetchContacts = async () => {
  const { data } = await instance.get('/user/pets/getAllUserPets');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/user/pets/adduserpet', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/user/pets/removeuserpet/${id}`);
  return data;
};
