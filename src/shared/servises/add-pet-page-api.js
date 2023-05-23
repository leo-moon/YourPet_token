import instance from '../../redux/auth/auth';

export const postUserPet = async petData => {
  const { data } = await instance.post('api/user/pets/adduserpet', petData);

  return data;
};
