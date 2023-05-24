import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';

import instance from 'redux/auth/auth';
import Logout from '../Logout/Logout';

import css from './UserFormData.module.css';

import {
  EditIcon,
  CameraIcon,
  CloseIcon,
  ConfirmIcon,
} from 'images/icons/userPageIcons';

const initialValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
  image: null,
};

const UserFormData = () => {
  const [userData, setUserData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue('image', file);
    setIsSubmitting(false);
  };

  const handleFormSubmit = async values => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append('image', values.image);

      await instance.patch('/api/auth/users/updateavatar', formData);
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
    // finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleDeleteClick = setFieldValue => {
    setFieldValue('image', null);
  };

  const DataUser = userData.map(
    ({ name, email, Birthday, Phone, City, avatarURL }, index) => (
      <div key={index}>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {formikProps => (
            <Form autoComplete="off" className={css.form}>
              <div>
                <div className={css.photo}>
                  {(formikProps.values.image && (
                    <img
                      src={URL.createObjectURL(formikProps.values.image)}
                      alt="Preview"
                    />
                  )) || <img src={avatarURL} alt="name" />}
                </div>

                {(formikProps.values.image && (
                  <div className={css.editPhotoWrapper}>
                    <button
                      type="submit"
                      className={`${css.submitBtn} ${
                        isSubmitting ? css.submitting : ''
                      }`}
                      disabled={isSubmitting}
                    >
                      <ConfirmIcon
                        color={isSubmitting ? '#00C3AD' : '#54ADFF'}
                      />
                    </button>

                    <span className={css.editPhotoTitle}>Confirm</span>
                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteClick(formikProps.setFieldValue)
                      }
                    >
                      <CloseIcon color={'#ec1f18'} width={13} height={13} />
                    </button>
                  </div>
                )) || (
                  <label className={css.editPhotoWrapper}>
                    <input
                      className={css.uploadbtn}
                      type="file"
                      accept="image/*"
                      onChange={event =>
                        handleFileChange(event, formikProps.setFieldValue)
                      }
                    />
                    <CameraIcon color={'#54ADFF'} />
                    <span className={css.editPhotoTitle}>Edit photo</span>
                  </label>
                )}
              </div>
              <div className={css.formFieldWrapper}>
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
              </div>
            </Form>
          )}
        </Formik>
        <Logout />
      </div>
    )
  );

  return <>{DataUser}</>;
};

export default UserFormData;
