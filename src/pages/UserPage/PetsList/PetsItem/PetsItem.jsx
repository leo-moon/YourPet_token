import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchContacts } from 'shared/servises/user-api';

import TrashIcon from 'images/icons/TrashIcon';

import css from './PetsItem.module.css';

const PetsItem = () => {
  //   console.log(fetchContacts());
  //   const allPets = async () => {
  //     try {
  //       const data = await fetchContacts();
  //       return data;
  //     } catch ({ response }) {
  //       return response.data.message;
  //     }
  //   };
  const fetchAllContacts = createAsyncThunk(
    'contacts/fetch-all',
    async (_, thunkAPI) => {
      try {
        const data = await fetchContacts();
        return data;
      } catch ({ response }) {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    }
  );

  console.log(fetchAllContacts());

  return (
    <li className={css.petItem}>
      <TrashIcon color={'#54ADFF'} className={css.deleteIcon} />
      <img
        src="https://res.cloudinary.com/dwptjohyl/image/upload/v1684266179/iypomlbmaefrplomzkzn.jpg"
        alt="domestic pet"
        width="240"
        height="240"
        className={css.petImg}
      />
      <div>
        <p className={css.text}>
          <span className={css.attributeName}>Name: </span>Jack
        </p>
        <p className={css.text}>
          <span className={css.attributeName}>Date of birth: </span>
          22.04.2018
        </p>
        <p className={css.text}>
          <span className={css.attributeName}>Breed: </span>Labrador
        </p>
        <p className={css.text}>
          <span className={css.attributeName}>Comments: </span>
          Jack is a gray Persian dog with green eyes. He loves to be pampered
          and groomed, and enjoys playing with toys. Although a bitshy, he's a
          loyal and affectionate lap dog.
        </p>
      </div>
    </li>
  );
};

export default PetsItem;
