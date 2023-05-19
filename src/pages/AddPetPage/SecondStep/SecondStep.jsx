import { Formik, Field, Form } from 'formik';

import css from '../AddPage.module.css';

const SecondStep = ({ data, next, prev }) => {
  const handleSubmit = values => {
    next(values);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.form}>
          <h2>Personal details</h2>
          {data.category !== 'your pet' && (
            <label>
              Title of add
              <Field name="title" />
            </label>
          )}
          <label>
            Name pet
            <Field name="namePet" />
          </label>
          <label>
            Date of birth
            <Field name="dateOfBirth" />
          </label>
          <label>
            Breed
            <Field name="breed" />
          </label>

          <button type="button" onClick={() => prev(values)}>
            Cancel
          </button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default SecondStep;
