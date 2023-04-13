import {
   Container,
   Wrapper,
} from './styled';
import {Formik} from 'formik';
import * as yup from 'yup';
import React, {useState} from 'react';
import {Input} from '@components/Input';
import {Button} from '@components/Button';
import {Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from 'react-native';
import {Title} from '@components/Title';
import {TextLink} from '@screens/RegistrationScreen/styled';

const validationSchema = yup.object().shape({
   email: yup.string().email('Please enter a valid email').required('Email is required'),
   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const Form = () => {
   const handleSubmit = (values, {resetForm}) => {
      console.log(values);
      resetForm()
   };
   const keyboardHiddenHandler = () => {
      // setIsShowKeyboard(false);
      Keyboard.dismiss();
   };


   return (
      <TouchableWithoutFeedback
         onPress={keyboardHiddenHandler}
      >
         <Container>
            <Formik
               initialValues={{email: '', password: ''}}
               onSubmit={handleSubmit}
               // validationSchema={validationSchema}
            >
               {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                  <Wrapper>
                     <Title
                        style={{marginBottom: 32}}
                        text={'Реєстрація'}
                     />
                     <Input
                        handleChange={handleChange('email')}
                        value={values.email}
                        placeholder={'Email'}
                        boole={touched.email && errors.email}
                        errors={errors.email}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                     />
                     <Input
                        handleChange={handleChange('password')}
                        value={values.password}
                        boole={touched.password && errors.password}
                        errors={errors.password}
                        autoCapitalize={'none'}
                        placeholder={'Password'}
                        secureTextEntry={true}
                     />
                     <Button
                        style={{marginTop: 42}} // TODO така стилізація кнопки норм ?
                        text={'Зареєструватися'}
                        handlePress={handleSubmit}
                     />
                     <TextLink>
                        Вже є обліковий запис? Вхід
                     </TextLink>
                  </Wrapper>
               )}
            </Formik>
         </Container>
      </TouchableWithoutFeedback>
   )
}