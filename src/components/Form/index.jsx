import {
   Container,
   Wrapper,
} from './styled';
import {Formik} from 'formik';
import {Input} from '@components/Input';
import {Button} from '@components/Button';
import {Keyboard} from 'react-native';
import {validationSchema} from '../../utils';
import * as yup from 'yup';


const initialValues = {
   email: '',
   password: '',
   login: '',
}


export const Form = (props) => {
   const {
      inputList,
      setIsShowKeyboard,
   } = props

   const handleSubmit = async (values) => {
      console.log(values);

     await setIsShowKeyboard(prevState => !prevState)

      Keyboard.dismiss();
   };
   const keyboardHiddenHandler = () => {
      Keyboard.dismiss();
   };

   return (
      <Container onPress={keyboardHiddenHandler}>
         <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={
               yup.object({
                  login: validationSchema.login,
                  email: validationSchema.email,
                  password: validationSchema.password,
               })}
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