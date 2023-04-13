import {
   Container,
   Wrapper,
} from './styled';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Input} from '@components/Input';
import {Button} from '@components/Button';
import {Keyboard} from 'react-native';

const validationSchema = yup.object().shape({
   email: yup.string().email('Please enter a valid email').required('Email is required'),
   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const Form = ({setIsShowKeyboard}) => {
   const handleSubmit = (values, {resetForm}) => {
      console.log(values);

      setIsShowKeyboard(prevState => !prevState)

      Keyboard.dismiss();

      resetForm()
   };
   const keyboardHiddenHandler = () => {
      // setIsShowKeyboard(false);
      Keyboard.dismiss();
   };

   return (
      <Container onPress={keyboardHiddenHandler}>
         <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
         >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
               <Wrapper>
                  <Input
                     handleChange={handleChange('email')}
                     value={values.email}
                     placeholder={'Email'}
                     boole={touched.email && errors.email}
                     errors={errors.email}
                     keyboardType={'email-address'}
                     autoCapitalize={'none'}
                     setIsShowKeyboard={setIsShowKeyboard}
                  />
                  <Input
                     handleChange={handleChange('password')}
                     value={values.password}
                     boole={touched.password && errors.password}
                     errors={errors.password}
                     autoCapitalize={'none'}
                     placeholder={'Password'}
                     secureTextEntry={true}
                     setIsShowKeyboard={setIsShowKeyboard}
                  />
                  <Button
                     style={{marginTop: 42}} // TODO така стилізація кнопки норм ?
                     text={'Зареєструватися'}
                     handlePress={handleSubmit}
                  />
               </Wrapper>
            )}
         </Formik>
      </Container>
   )
}