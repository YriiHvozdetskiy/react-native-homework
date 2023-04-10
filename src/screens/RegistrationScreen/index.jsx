import {
   Container, StyledBackground,
} from './styled';
import {
   TouchableWithoutFeedback,
} from 'react-native';
import {Form} from '@components/Form';

export const RegistrationScreen = () => {

   return (
      <Container>
         <TouchableWithoutFeedback

         >
            <StyledBackground source={require('../../assets/photo-bg.jpg')}>
               <Form/>
            </StyledBackground>
         </TouchableWithoutFeedback>
      </Container>
   )
}