import {
   Container,
   Wrapper,
} from './styled';
import {Formik} from 'formik';
import {Input} from '@components/Input';
import {Button} from '@components/Button';
import {Keyboard} from 'react-native';

export const Form = (props) => {
   const {
      inputList,
      setIsShowKeyboard,
      initialValues,
      validationSchema,
      handleSubmit,
   } = props

   const keyboardHiddenHandler = () => {
      Keyboard.dismiss();
   };

   return (
      <Container onPress={keyboardHiddenHandler}>
         <Formik
            initialValues={initialValues}
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
                     style={{marginTop: 42}}
                     text={'Зареєструватися'}
                     handlePress={handleSubmit}
                  />
               </Wrapper>
            )}
         </Formik>
      </Container>
   )
}