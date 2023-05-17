import { Formik, Field, Form } from 'formik';

const baseInitialValues = {
  petName: '',
  petBirthDate: '',
  breed: '',
};

const SecondStep = ({ step }) => {
  const onCancelBtnClick = () => {};
  if (step !== 1) return null;

  return (
    <>
      <h2>Personal details</h2>
      <Formik initialValues={{ ...baseInitialValues }}>
        <Form>
          <Field name="petName" />
          <Field name="petBirthDate" />
          <Field name="breed" />
          <button type="button" onClick={onCancelBtnClick}>
            Cancel
          </button>
          <button type="button">Next</button>
        </Form>
      </Formik>
    </>
  );
};

export default SecondStep;
