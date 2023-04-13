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
import React from 'react';

export const RegistrationScreen = () => {
   const keyboardHiddenHandler = () => {
      // setIsShowKeyboard(false);
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
                     <Wrapper>
                        <Title
                           style={{marginBottom: 32}}
                           text={'Реєстрація'}
                        />
                        <Form/>
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