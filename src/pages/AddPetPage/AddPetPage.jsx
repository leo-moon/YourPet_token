// import { Formik, Form } from 'formik';
// import { object, string, number, date, InferType } from 'yup';
import { useState } from 'react';

import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';

import css from './AddPage.module.css';

// import getInitialFields from './getInitialFields';

const initialData = {
  category: 'your pet',
  namePet: '',
  dateOfBirth: '',
  breed: '',
  location: '',
  comments: '',
  title: '',
  sex: '',
  price: '',
  image: '',
};

const AddPetPage = () => {
  const [data, setData] = useState(initialData);
  const [currentStep, setCurrentStep] = useState(0);

  console.log(data);

  const makeRequest = async formData => {
    console.log('Form submited', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(data);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <FirstStep next={handleNextStep} data={data} />,
    <SecondStep next={handleNextStep} prev={handlePrevStep} data={data} />,
    <ThirdStep next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <div className={css.container}>
      <div className={css.formWrapper}>
        <h1>Add pet</h1>
        <div className={css.categoryWrapper}>
          <h2>Choose option</h2>
          <h2>Personal details</h2>
          <h2>More info</h2>
        </div>

        {steps[currentStep]}
      </div>
    </div>
  );
};
export default AddPetPage;

// const [step, setStep] = useState(1);
// const [option, setOption] = useState('your pet');
// const [completedFields, setCompletedFields] = useState({});
// // console.log(step);
// // console.log(option);
// console.log(completedFields);
// console.log(getInitialFields(step, option));

// const onNextBtnClick = e => {
//   if (e.target.textContent !== 'Next') return;

//   let userValues = {};

//   const fields = Object.keys(getInitialFields(step, option));

//   fields.forEach(el => {
//     const { value } = e.currentTarget.elements[el];

//     // console.log(value);

//     userValues = { ...userValues, [el]: value };

//     // console.log(userValues);
//   });

//   console.log(userValues);

//   setCompletedFields(prev => ({ ...prev, ...userValues }));

//   if (step === 1) {
//     setOption(e.currentTarget.elements.addPetOption.value);
//   }

//   setStep(prev => prev + 1);

//   // console.log(completedFields);
// };

// const onCancelBtnCLick = () => {
//   setStep(prev => prev - 1);
// };

// return (
//   <Formik
//     initialValues={
//       // getInitialFields(step, option)
//       initialValues
//     }
//   >
//     <Form onClick={onNextBtnClick}>
// <h1>Add pet</h1>
// <h2>Choose option</h2>
// <h2>Personal details</h2>
// <h2>More info</h2>
//       <FirstStep setStep={setStep} setOption={setOption} step={step} />
//       <SecondStep setStep={setStep} setOption={setOption} step={step} />
//       <ThirdStep setStep={setStep} setOption={setOption} step={step} />
//       <button
//         type="button"
//         onClick={onCancelBtnCLick}
//         disabled={step === 0 ? true : false}
//       >
//         Cancel
//       </button>
//       <button type="button">Next</button>
//     </Form>
//   </Formik>
// );
