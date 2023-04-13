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
         <TouchableWithoutFeedback
            onPress={keyboardHiddenHandler}
         >
            <StyledBackground source={require('../../assets/photo-bg.jpg')}>

               <TouchableWithoutFeedback
                  onPress={keyboardHiddenHandler}
               >
                  <KeyboardAvoidingView
                     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                     style={{
                        // flex: 1,
                        // justifyContent: 'flex-end',
                        // borderColor: 'tomato',
                        // borderStyle: 'solid',
                        // borderWidth: 1,
                        // // // // height:'100%'
                        width: '100%',
                     }}>
                     <Wrapper>
                        <Form/>
                     </Wrapper>
                  </KeyboardAvoidingView>
               </TouchableWithoutFeedback>
            </StyledBackground>
         </TouchableWithoutFeedback>
      </Container>
   )
}