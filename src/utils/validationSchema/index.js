import * as yup from 'yup';

export const validationSchema = {
   login:
      yup.string()
         .min(3, 'Login must be at least 3 characters')
         .required('Login is required'),
   email:
      yup.string()
         .email('Please enter a valid email')
         .required('Email is required'),
   password:
      yup.string()
         .trim('fill in the field')
         .min(3, 'Password must be at least 3 characters')
         .required('Password is required'),
   confirm_password:
      yup.string()
         .oneOf([yup.ref('password'), null], "Passwords don't match!")
         .trim('fill in the field')
         .min(3, 'minimum 3 character'),
};