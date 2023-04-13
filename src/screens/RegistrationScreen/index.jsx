import {
   Container,
   StyledBackground,
   TextLink,
   Wrapper,
} from './styled';
import {
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   TouchableWithoutFeedback,
} from 'react-native';
import {Form} from '@components/Form';
import {Title} from '@components/Title';
import React, {useState} from 'react';
import {RegistrationScreenList} from '@screens/RegistrationScreen/mock';
import * as yup from 'yup';
import {validationSchema} from '../../utils';

export const RegistrationScreen = () => {

   const [IsShowKeyboard, setIsShowKeyboard] = useState(true);
   const keyboardHiddenHandler = () => {
      Keyboard.dismiss();
   };

   const handleSubmit = async (values) => {
      console.log(values);

      Keyboard.dismiss();
   };

   return (
      <Container>
         <TouchableWithoutFeedback onPress={keyboardHiddenHandler}>
            <StyledBackground source={require('../../assets/photo-bg.jpg')}>
               <TouchableWithoutFeedback onPress={keyboardHiddenHandler}>
                  <KeyboardAvoidingView
                     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                     style={{width: '100%'}}>
                     <Wrapper IsShowKeyboard={IsShowKeyboard}>
                        <Title
                           style={{marginBottom: 32}}
                           text={'Реєстрація'}
                        />
                        <Form
                           validationSchema={
                              yup.object({
                                 login: validationSchema.login,
                                 email: validationSchema.email,
                                 password: validationSchema.password,
                                 confirm_password: validationSchema.confirm_password,
                              })}
                           initialValues={{
                              login: '',
                              email: '',
                              password: '',
                              confirm_password: '',
                           }}
                           setIsShowKeyboard={setIsShowKeyboard}
                           inputList={RegistrationScreenList}
                           handleSubmit={handleSubmit}
                        />
                        <TextLink>
                           Вже є обліковий запис? Вхід
                        </TextLink>
                     </Wrapper>
                  </KeyboardAvoidingView>
               </TouchableWithoutFeedback>
            </StyledBackground>
         </TouchableWithoutFeedback>
      </Container>
   )
}