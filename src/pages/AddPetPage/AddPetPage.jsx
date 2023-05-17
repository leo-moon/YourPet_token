import { Formik, Form } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { useState } from 'react';

import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';

const AddPetPage = () => {
  const [step, setStep] = useState(0);
  const [option, setOption] = useState(null);
  console.log(step);
  console.log(option);

  const onNextBtnClick = e => {
    if (e.target.textContent !== 'Next') return;
    console.dir(e);
    console.dir(e.currentTarget.elements.addPetOption.value);

    if (step === 3) return;

    setStep(prev => prev + 1);

    setOption(e.currentTarget.elements.addPetOption.value);
  };

  const onCancelBtnCLick = () => {
    setStep(prev => prev - 1);
  };

  const baseNextStepsInitialValues = {
    petName: '',
    petBirthDate: '',
    breed: '',
  };

  return (
    <Formik
      initialValues={
        step === 0 ? { addPetOption: '' } : { ...baseNextStepsInitialValues }
      }
    >
      <Form onClick={onNextBtnClick}>
        <h1>Add pet</h1>
        <h2>Choose option</h2>
        <h2>Personal details</h2>
        <h2>More info</h2>
        <FirstStep setStep={setStep} setOption={setOption} step={step} />
        <SecondStep setStep={setStep} setOption={setOption} step={step} />
        <ThirdStep setStep={setStep} setOption={setOption} step={step} />
        <button
          type="button"
          onClick={onCancelBtnCLick}
          disabled={step === 0 ? true : false}
        >
          Cancel
        </button>
        <button type="button">Next</button>
      </Form>
    </Formik>
  );
};
export default AddPetPage;
