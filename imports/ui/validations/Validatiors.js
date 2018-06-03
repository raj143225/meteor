import validator from 'validator';

export const required = (value) => {
  if (!value.toString().trim().length)  {
    return true;
  }
};
