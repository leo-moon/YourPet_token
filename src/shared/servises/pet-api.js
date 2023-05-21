import axios from 'axios';

// const baseURL = 'https://api.themoviedb.org/3';

export const ApiCategoriBySearch = async (category,searchQuery) => {
const { data } =
await axios.get(`https://your-pet.onrender.com/api/notices?category=${category}&search=${searchQuery}`)
return data;
};



// export const ApiFavorite = async () => {
//   const { data } = await axios.get(`https://your-pet.onrender.com/api/notices/userfavoritenotices`);
//   return data;
// };

// export const ApiMyOwn = async () => {
//   const { data } = await axios.get(`https://your-pet.onrender.com/api/notices/mynotices`);
//   console.log(data)
//   return data;
// };



