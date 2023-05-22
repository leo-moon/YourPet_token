import { Formik, Field, Form } from 'formik';
import { BiArrowBack } from 'react-icons/bi';

import PawIcon from 'images/icons/AddPetPageIcons/PawIcon';

import css from '../AddPage.module.scss';

const SecondStep = ({ data, next, prev, setStatus }) => {
  const handleSubmit = values => {
    setStatus(prev => ({
      ...prev,
      secondIndicator: 'completed',
      thirdIndicator: 'current',
    }));
    next(values);
  };

  const onCancelBtnClick = values => {
    prev(values);

    setStatus(prev => ({
      ...prev,
      firstIndicator: 'current',
      secondIndicator: 'coming',
    }));
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.form}>
          {data.category !== 'your pet' && (
            <>
              <label className={css.inputLabel} htmlFor="title">
                Title of add
              </label>
              <Field
                name="title"
                id="title"
                placeholder="Title of add"
                className={css.input}
              />
            </>
          )}
          <label htmlFor="namePet" className={css.inputLabel}>
            Name pet
          </label>
          <Field
            name="namePet"
            id="namePet"
            placeholder="Type name pet"
            className={css.input}
          />

          <label htmlFor="dateOfBirth" className={css.inputLabel}>
            Date of birth
          </label>
          <Field
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Type date of birth"
            className={css.input}
          />

          <label htmlFor="breed" className={css.inputLabel}>
            Breed
          </label>
          <Field
            name="breed"
            id="breed"
            placeholder="Type breed"
            className={css.input}
          />

          <div
            className={
              data.category === 'your pet'
                ? css.btnsStepTwoYourPetWrap
                : css.btnsWrap
            }
          >
            <button type="submit" className={css.nextBtn}>
              Next
              <PawIcon />
            </button>
            <button
              type="button"
              onClick={() => onCancelBtnClick(values)}
              className={css.cancelBtn}
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

export default SecondStep;
