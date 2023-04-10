import {
   Container,
} from './styled';
import {Formik} from 'formik';
import {Button, TextInput, StyleSheet, Text} from 'react-native';
import * as yup from 'yup';
import React, {useState} from 'react';
import {Input} from '@components/Input';

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
                  value={values?.email}
                  placeholder={'Email'}
                  boole={touched.email && errors.email}
                  errors={errors}
                  isFocused={isFocused}
                  keyboardType={'email-address'}
                  autoCapitalize={'none'}
               />
               <Input
                  handleChange={handleChange('password')}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  value={values?.password}
                  boole={touched.password && errors.password}
                  errors={errors}
                  isFocused={isFocused}
                  autoCapitalize={'none'}
                  placeholder={'Password'}
                  secureTextEntry={true}
               />
               <Button title="Submit" onPress={handleSubmit}/>
            </Container>
         )}
      </Formik>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   input: {
      height: 40,
      width: '90%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
   },
   error: {
      color: 'red',
   },
});