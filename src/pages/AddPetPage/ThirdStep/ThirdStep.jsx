import { Field, Form, Formik } from 'formik';

import css from '../AddPage.module.css';

const ThirdStep = ({ next, prev, data }) => {
  const handleSubmit = values => {
    next(values, true);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.form}>
          <h2>ThirdStep</h2>
          <label>
            Female
            <Field type="radio" name="sex" value="Female" />
          </label>
          <label>
            Male
            <Field type="radio" name="sex" value="Male" />
          </label>

          {data.category !== 'your pet' && (
            <>
              <label>
                Location
                <Field name="location" />
              </label>

              {data.category === 'sell' && (
                <label>
                  Price
                  <Field name="price" />
                </label>
              )}

              <label>
                Comments
                <Field name="comments" />
              </label>
            </>
          )}

          <label>
            Add photo
            <Field type="file" name="image" />
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

export default ThirdStep;
