import { Formik, Field, Form } from 'formik';
import { BiArrowBack } from 'react-icons/bi';

import PawIcon from 'images/icons/AddPetPageIcons/PawIcon';

import css from '../AddPage.module.scss';

const FirstStep = ({ data, next, setStatus, currentStep }) => {
  const handleSubmit = values => {
    setStatus(prev => ({
      ...prev,
      firstIndicator: 'completed',
      secondIndicator: 'current',
    }));
    next(values);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form
          className={
            currentStep === 0 ? `${css.form} ${css.formStepOne}` : css.form
          }
        >
          <label
            htmlFor="your pet"
            className={
              values.category === 'your pet'
                ? css.activeCategoryLabel
                : css.categoryLabel
            }
          >
            your pet
          </label>
          <Field
            type="radio"
            name="category"
            value="your pet"
            className={css.category}
            id="your pet"
          />

          <label
            htmlFor="sell"
            className={
              values.category === 'sell'
                ? css.activeCategoryLabel
                : css.categoryLabel
            }
          >
            sell
          </label>
          <Field
            type="radio"
            name="category"
            value="sell"
            className={css.category}
            id="sell"
          />

          <label
            htmlFor="lost/found"
            className={
              values.category === 'lost/found'
                ? css.activeCategoryLabel
                : css.categoryLabel
            }
          >
            lost/found
          </label>
          <Field
            type="radio"
            name="category"
            value="lost/found"
            className={css.category}
            id="lost/found"
          />

          <label
            htmlFor="in good gands"
            className={
              values.category === 'in good gands'
                ? css.activeCategoryLabel
                : css.categoryLabel
            }
          >
            in good hands
          </label>
          <Field
            type="radio"
            name="category"
            value="in good gands"
            className={css.category}
            id="in good gands"
          />

          <div className={css.btnsFirstStepWrap}>
            <button className={css.nextBtn} type="submit">
              Next
              <PawIcon />
            </button>
            <button
              className={css.cancelBtn}
              type="button"
              // onClick={onCancelBtnCLick}
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

export default FirstStep;
