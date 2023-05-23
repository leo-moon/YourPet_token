import { Field, Form, Formik } from 'formik';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { BsGenderFemale } from 'react-icons/bs';
import { IoMaleOutline } from 'react-icons/io5';

// BsGenderFemale;
// IoMaleOutline;

import PawIcon from 'images/icons/AddPetPageIcons/PawIcon';

import css from '../AddPetPage.module.scss';

const ThirdStep = ({ next, prev, data, setStatus, currentStep }) => {
  const handleSubmit = (values, formik) => {
    setStatus(prev => ({
      ...prev,
      thirdIndicator: 'completed',
    }));
    // console.log(values);
    next(values, true, formik);
  };

  const onCancelBtnClick = values => {
    prev(values);

    setStatus(prev => ({
      ...prev,
      secondIndicator: 'current',
      thirdIndicator: 'coming',
    }));
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className={css.formStepThree}>
          {/* <img
            width="200"
            alt="pet"
            src={values.image !== '' ? URL.createObjectURL(values.image) : ''}
          /> */}
          <div
            className={
              data.category !== 'your pet' ? css.thirdStepFormWrap : ''
            }
          >
            <div>
              {data.category !== 'your pet' && (
                <>
                  <p className={css.inputLabel}>The sex</p>
                  <div className={css.sexWrap}>
                    <label
                      htmlFor="female"
                      className={
                        values.sex === 'female'
                          ? css.activeFemaleSexLabel
                          : css.sexLabel
                      }
                    >
                      <BsGenderFemale
                        size={24}
                        color={`${
                          values.sex === 'female' || values.sex === ''
                            ? '#F43F5E'
                            : '#888888'
                        }`}
                      />
                      Female
                    </label>
                    <Field
                      type="radio"
                      name="sex"
                      value="female"
                      className={css.sexInput}
                      id="female"
                    />
                    <label
                      htmlFor="male"
                      className={
                        values.sex === 'male'
                          ? css.activeMaleSexLabel
                          : css.sexLabel
                      }
                    >
                      <IoMaleOutline
                        size={24}
                        color={`${
                          values.sex === 'male' || values.sex === ''
                            ? '#54ADFF'
                            : '#888888'
                        }`}
                      />
                      Male
                    </label>
                    <Field
                      type="radio"
                      name="sex"
                      value="male"
                      className={css.sexInput}
                      id="male"
                    />
                  </div>
                </>
              )}

              <div
                className={
                  data.category === 'your pet'
                    ? css.addImgWrap
                    : css.addImgThirdStepWrap
                }
              >
                <p className={css.inputLabel}>
                  {/* {data.category === 'your pet'
                    ? 'Add photo'
                    : 'Load the pet’s image:'} */}
                  Add photo
                </p>
                <label htmlFor="file" className={css.addImg}>
                  {values.image !== '' ? (
                    <img
                      width="100%"
                      src={URL.createObjectURL(values.image)}
                      alt="pet"
                    />
                  ) : (
                    <AiOutlinePlus size={30} color="#54ADFF" />
                  )}
                </label>
                <input
                  type="file"
                  name="image"
                  id="file"
                  className={css.addImgInput}
                  onChange={e => setFieldValue('image', e.target.files[0])}
                />
              </div>
            </div>

            <div
              className={
                data.category !== 'your pet' ? css.thirdStepInputwrap : ''
              }
            >
              {data.category !== 'your pet' && (
                <>
                  <label
                    htmlFor="location"
                    className={css.inputLabel}
                    placeholder="Type name pet"
                  >
                    Location
                  </label>
                  <Field
                    name="location"
                    id="location"
                    className={css.input}
                    placeholder="Type of location"
                  />
                </>
              )}

              {data.category === 'sell' && (
                <>
                  <label htmlFor="price" className={css.inputLabel}>
                    Price
                  </label>
                  <Field
                    name="price"
                    id="price"
                    className={css.input}
                    placeholder="Type of price"
                  />
                </>
              )}

              <label htmlFor="comments" className={css.inputLabel}>
                Comments
              </label>
              <Field
                as="textarea"
                name="comments"
                id="comments"
                className={
                  data.category !== 'your pet'
                    ? css.textareaThirdStep
                    : css.commentTextarea
                }
                placeholder="Type breed"
              />
            </div>
          </div>

          <div className={css.btnsThirdStepWrap}>
            <button className={css.nextBtn} type="submit">
              Next
              <PawIcon />
            </button>
            <button
              className={css.cancelBtn}
              type="button"
              onClick={() => onCancelBtnClick(values)}
            >
              <BiArrowBack color="#54ADFF" size={24} />
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ThirdStep;
