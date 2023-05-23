import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';

import instance from 'redux/auth/auth';

import css from './UserFormData.module.css';

import { EditIcon } from 'images/icons/userPageIcons';

// import {
//   AddPetIcon,
//   LogoutIcon,
//   CameraIcon,
//   CheckIcon,
//   EditIcon,
//   AddPhotoIcon,
//   PetLegIcon,
// } from 'images/icons/userPageIcons';

const initialValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserFormData = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await instance.get('/api/user/pets/getAllUserPets');
      setUserData(data.userInfo);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DataUser = userData.map(
    ({ name, email, Birthday, Phone, City }, index) => (
      <Formik
        key={index}
        initialValues={initialValues}
        // validationSchema={userSchema}
        // onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={css.form}>
          <label className={css.fieldWrapper}>
            <span className={css.fieldName}>Name:</span>
            <Field
              className={css.field}
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
            />
            <EditIcon color={'#54ADFF'} className={css.editIcon} />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={css.fieldWrapper}>
            <span className={css.fieldName}>Email:</span>
            <Field
              className={css.field}
              type="text"
              placeholder="Enter email"
              name="email"
              value={email}
            />
            <EditIcon color={'#54ADFF'} className={css.editIcon} />
            <ErrorMessage name="email" component="div" />
          </label>
          <label className={css.fieldWrapper}>
            <span className={css.fieldName}>Birthday:</span>
            <Field
              className={css.field}
              type="text"
              placeholder="Enter birthday"
              name="birthday"
              value={Birthday}
            />
            <EditIcon color={'#54ADFF'} className={css.editIcon} />
            <ErrorMessage name="birthday" component="div" />
          </label>
          <label className={css.fieldWrapper}>
            <span className={css.fieldName}>Phone:</span>
            <Field
              className={css.field}
              type="text"
              placeholder="Enter phone"
              name="phone"
              value={Phone}
            />
            <EditIcon color={'#54ADFF'} className={css.editIcon} />
            <ErrorMessage name="phone" component="div" />
          </label>
          <label className={css.fieldWrapper}>
            <span className={css.fieldName}>City:</span>
            <Field
              className={css.field}
              type="text"
              placeholder="Enter city"
              name="city"
              value={City}
            />
            <EditIcon color={'#54ADFF'} className={css.editIcon} />
            <ErrorMessage name="city" component="div" />
          </label>
        </Form>
      </Formik>
    )
  );

  return <>{DataUser}</>;
  // <Formik
  //   initialValues={initialValues}
  //   // validationSchema={userSchema}
  //   // onSubmit={handleSubmit}
  // >
  //   <Form autoComplete="off" className={css.form}>
  //     <label className={css.fieldWrapper}>
  //       <span className={css.fieldName}>Name:</span>
  //       <Field
  //         className={css.field}
  //         type="text"
  //         placeholder="Enter login"
  //         name="name"
  //         // value={login}
  //       />
  //       <EditIcon color={'#54ADFF'} className={css.editIcon} />
  //       <ErrorMessage name="name" component="div" />
  //     </label>
  //     <label className={css.fieldWrapper}>
  //       <span className={css.fieldName}>Email:</span>
  //       <Field
  //         className={css.field}
  //         type="text"
  //         placeholder="Enter email"
  //         name="email"
  //         // value={email}
  //       />
  //       <EditIcon color={'#54ADFF'} className={css.editIcon} />
  //       <ErrorMessage name="email" component="div" />
  //     </label>
  //     <label className={css.fieldWrapper}>
  //       <span className={css.fieldName}>Birthday:</span>
  //       <Field
  //         className={css.field}
  //         type="text"
  //         placeholder="Enter birthday"
  //         name="birthday"
  //         // value={password}
  //       />
  //       <EditIcon color={'#54ADFF'} className={css.editIcon} />
  //       <ErrorMessage name="birthday" component="div" />
  //     </label>
  //     <label className={css.fieldWrapper}>
  //       <span className={css.fieldName}>Phone:</span>
  //       <Field
  //         className={css.field}
  //         type="text"
  //         placeholder="Enter phone"
  //         name="phone"
  //         // value={password}
  //       />
  //       <EditIcon color={'#54ADFF'} className={css.editIcon} />
  //       <ErrorMessage name="phone" component="div" />
  //     </label>
  //     <label className={css.fieldWrapper}>
  //       <span className={css.fieldName}>City:</span>
  //       <Field
  //         className={css.field}
  //         type="text"
  //         placeholder="Enter city"
  //         name="city"
  //         // value={password}
  //       />
  //       <EditIcon color={'#54ADFF'} className={css.editIcon} />
  //       <ErrorMessage name="city" component="div" />
  //     </label>
  //   </Form>
  // </Formik>
};
export default UserFormData;
