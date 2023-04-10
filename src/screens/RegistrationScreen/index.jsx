import {
   Container, StyledBackground, Wrapper,
} from './styled';
import {
   TouchableWithoutFeedback,
} from 'react-native';
import {Form} from '@components/Form';
import {Title} from '@components/Title';
import React from 'react';

export const RegistrationScreen = () => {

   return (
      <Container>
         <TouchableWithoutFeedback

         >
            <StyledBackground source={require('../../assets/photo-bg.jpg')}>
               <Wrapper>
                  <Title text={'Реєстрація'} distance={32}/>
                  <Form/>
               </Wrapper>
            </StyledBackground>
         </TouchableWithoutFeedback>
      </Container>
   )
}