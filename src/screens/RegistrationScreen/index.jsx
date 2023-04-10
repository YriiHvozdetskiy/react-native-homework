import {
   Container, StyledBackground,
} from './styled';
import {
   ImageBackground,
   Text,
   TouchableWithoutFeedback,
} from 'react-native';

export const RegistrationScreen = () => {

   return (
      <Container>
         <TouchableWithoutFeedback

         >
            <StyledBackground
               source={require('../../assets/photo-bg.jpg')}
            >
            </StyledBackground>
         </TouchableWithoutFeedback>
      </Container>
   )
}