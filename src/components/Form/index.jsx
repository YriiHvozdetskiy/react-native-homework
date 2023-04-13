import {
   Container,
} from './styled';
import {Formik} from 'formik';
import * as yup from 'yup';
import React, {useState} from 'react';
import {Input} from '@components/Input';
import {Button} from '@components/Button';

const validationSchema = yup.object().shape({
   email: yup.string().email('Please enter a valid email').required('Email is required'),
   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const Form = () => {
   const [isFocused, setIsFocused] = useState(false);

   const handleSubmit = (values) => {
      console.log(values);
   };

   return (
      <Formik
         initialValues={{email: '', password: ''}}
         onSubmit={handleSubmit}
         validationSchema={validationSchema}
      >
         {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
            <Container>
               <Input
                  handleChange={handleChange('email')}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  value={values.email}
                  placeholder={'Email'}
                  boole={touched.email && errors.email}
                  errors={errors.email}
                  isFocused={isFocused}
                  keyboardType={'email-address'}
                  autoCapitalize={'none'}
               />
               <Input
                  handleChange={handleChange('password')}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  value={values.password}
                  boole={touched.password && errors.password}
                  errors={errors.password}
                  isFocused={isFocused}
                  autoCapitalize={'none'}
                  placeholder={'Password'}
                  secureTextEntry={true}
               />
               <Button
                  style={{marginTop: 42}}
                  text={'Зареєструватися'}
               />
            </Container>
         )}
      </Formik>
   )
}