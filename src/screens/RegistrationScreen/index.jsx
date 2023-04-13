import {
   Container, StyledBackground, Wrapper,
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
         <TouchableWithoutFeedback
            onPress={keyboardHiddenHandler}
         >
            <StyledBackground source={require('../../assets/photo-bg.jpg')}>
               <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                  style={{
                     // flex: 1,
                     justifyContent: 'flex-end',
                     borderColor: 'tomato',
                     borderStyle: 'solid',
                     borderWidth: 1,
                     // height:'100%'
                     width:'100%'
                  }}
               >
                  <Wrapper>
                     <Title text={'Реєстрація'} distance={32}/>
                     <Form/>
                  </Wrapper>
               </KeyboardAvoidingView>
            </StyledBackground>
         </TouchableWithoutFeedback>
      </Container>
   )
}