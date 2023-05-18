import axios from 'axios';

// const baseURL = 'https://api.themoviedb.org/3';

export const ApiFetchPetSell = async () => {
  const { data } = await axios.get(`https://your-pet.onrender.com/api/notices?category=sell`);
  return data;
};

export const ApiInGoodHands = async () => {
  const { data } = await axios.get(`https://your-pet.onrender.com/api/notices?category=in%20good%20hands`);
  return data;
};
export const ApiLostFound = async () => {
  const { data } = await axios.get(`https://your-pet.onrender.com/api/notices?category=lost%2Ffound`);
  return data;
};

export const ApiFavorite = async () => {
  const { data } = await axios.get(`https://your-pet.onrender.com/api/notices/userfavoritenotices`);
  return data;
};

export const ApiMyOwn = async () => {
  const { data } = await axios.get(`https://your-pet.onrender.com/api/notices/mynotices`);
  console.log(data)
  return data;
};



