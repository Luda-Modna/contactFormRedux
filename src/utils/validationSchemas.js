import * as yup from 'yup';

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required(),
  phone: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/, 'Phone number must be "+ xx xxx xxx xx xx"')
    .required(),
});
