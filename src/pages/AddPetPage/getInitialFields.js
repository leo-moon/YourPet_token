import { baseFields, additionalFields } from './fields';

// console.log(baseFields, additionalFields);

const getInitialFields = (step, option) => {
  // console.log(step, option);
  if (step === 1) return baseFields.firstStep;

  if (step === 2)
    return option === 'your pet'
      ? baseFields.secondStep
      : { ...baseFields.secondStep, ...additionalFields.secondStep };

  if (step === 3)
    return option === 'your pet'
      ? baseFields.thirdStep
      : { ...baseFields.thirdStep, ...additionalFields.thirdStep };
};

export default getInitialFields;
