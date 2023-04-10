import {
   Container,
} from './styled';
import {Title} from '@components/Title';
import {Formik} from 'formik';
import {Button, TextInput, View, StyleSheet, Text} from 'react-native';
import * as yup from 'yup';
import React from 'react';

const validationSchema = yup.object().shape({
   email: yup.string().email('Please enter a valid email').required('Email is required'),
   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const Form = () => {

   const handleSubmit = (values) => {
      console.log(values);
   };

   return (
      <Container>
         <Title text={'Реєстрація'}/>
         <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
         >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
               <View>
                  <TextInput
                     style={styles.input}
                     onChangeText={handleChange('email')}
                     onBlur={handleBlur('email')}
                     value={values.email}
                     placeholder="Email"
                     keyboardType="email-address"
                     autoCapitalize="none"
                  />
                  {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                  <TextInput
                     style={styles.input}
                     onChangeText={handleChange('password')}
                     onBlur={handleBlur('password')}
                     value={values.password}
                     placeholder="Password"
                     secureTextEntry
                  />
                  {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                  <Button title="Submit" onPress={handleSubmit}/>
               </View>
            )}
         </Formik>
      </Container>
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