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

export const Form = (props) => {
   const {
      inputList,
      setIsShowKeyboard,
   } = props

   const handleSubmit = (values, {resetForm}) => {
      console.log(values);

      setIsShowKeyboard(prevState => !prevState)

      Keyboard.dismiss();

      resetForm()
   };
   const keyboardHiddenHandler = () => {
      Keyboard.dismiss();
   };

   return (
      <Container onPress={keyboardHiddenHandler}>
         <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
         >
            {({
                 handleChange,
                 handleSubmit,
                 values,
                 errors,
                 touched,
              }) => (
               <Wrapper>
                  {inputList.map((field, index) => (
                     <Input
                        key={index}
                        handleChange={handleChange(field.name)}
                        value={values[field.name]}
                        placeholder={field.placeholder}
                        boole={touched[field.name] && errors[field.name]}
                        errors={errors[field.name]}
                        keyboardType={field.type}
                        autoCapitalize={field.capitalize}
                        secureTextEntry={field.secureTextEntry}
                        setIsShowKeyboard={setIsShowKeyboard}
                     />
                  ))}
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