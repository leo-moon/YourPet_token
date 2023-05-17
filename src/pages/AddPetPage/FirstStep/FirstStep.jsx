import { Formik, Field, Form } from 'formik';

const initialValues = {
  addPetOption: '',
};

const FirstStep = ({ setStep, setOption, step }) => {
  if (step !== 0) return null;

  return (
    <>
      <h2>Choose option</h2>

      <label>
        your pet
        <Field
          type="radio"
          name="addPetOption"
          value="your pet"
          checked={true}
        />
      </label>
      <label>
        sell
        <Field type="radio" name="addPetOption" value="sell" />
      </label>
      <label>
        lost/found
        <Field type="radio" name="addPetOption" value="lost/found" />
      </label>
      <label>
        in good gands
        <Field type="radio" name="addPetOption" value="in good gands" />
      </label>
    </>
  );
};

export default FirstStep;
