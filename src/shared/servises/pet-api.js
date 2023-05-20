import axios from 'axios';

// const baseURL = 'https://api.themoviedb.org/3';

export const ApiCategoriBySearch = async () => {
const { data } =
await axios.get(`https://your-pet.onrender.com/api/notices?category=sell&search=frog`)
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



