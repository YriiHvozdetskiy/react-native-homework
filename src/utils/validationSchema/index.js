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
         .min(6, 'Password must be at least 6 characters')
         .required('Password is required'),
};