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

export const RegistrationScreen = () => {

   const [IsShowKeyboard, setIsShowKeyboard] = useState(true);
   const keyboardHiddenHandler = () => {
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
                           setIsShowKeyboard={setIsShowKeyboard}
                           inputList={RegistrationScreenList}
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