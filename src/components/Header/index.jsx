import {
   Container,
   LoginButton,
   Title,
   ButtonText, TitleCustomFont,
} from './styled';
import {Text} from 'react-native';

export const Header = () => {

   return (
      <Container>
         <LoginButton activeOpacity={0.3}>
            <ButtonText>Login</ButtonText>
         </LoginButton>
         <Title>Hello world</Title>
         <Title isLastChild>Last element</Title>
         <Text style={{fontFamily: 'Roboto-Medium', fontSize: 30}}>font family</Text>
         <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 30}}>font family</Text>
         <TitleCustomFont>font family</TitleCustomFont>
      </Container>
   )
}