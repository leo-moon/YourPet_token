import { Formik, Field, Form } from 'formik';

import css from '../AddPage.module.css';

const FirstStep = ({ data, next }) => {
  const handleSubmit = values => {
    next(values);
  };
  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          your pet
          <Field
            type="radio"
            name="category"
            value="your pet"
            // checked={true}
          />
        </label>
        <label>
          sell
          <Field type="radio" name="category" value="sell" />
        </label>
        <label>
          lost/found
          <Field type="radio" name="category" value="lost/found" />
        </label>
        <label>
          in good gands
          <Field type="radio" name="category" value="in good gands" />
        </label>
        {/* <button
          type="button"
          // onClick={onCancelBtnCLick}
        >
          Cancel
        </button> */}
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default FirstStep;
