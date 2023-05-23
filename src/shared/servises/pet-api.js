import axios from 'axios';

// const baseURL = 'https://api.themoviedb.org/3';

export const ApiCategoriBySearch = async (category,searchQuery) => {
const { data } =
await axios.get(`https://your-pet.onrender.com/api/notices?category=${category}&search=${searchQuery}`)
return data;
};



export const ApiFavorite = async (token) => {
const { data } =
    await axios.get(`https://your-pet.onrender.com/api/notices/userfavoritenotices`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
  return data;
};

export const ApiMynotices = async (token) => {
const { data } =
    await axios.get(`https://your-pet.onrender.com/api/notices/mynotices`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
  return data;
};




