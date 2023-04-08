import {
   Container,
   LoginButton,
   Title,
   ButtonText,
} from './Header.styled';

export const Header = () => {

   return (
      <Container>
         <LoginButton activeOpacity={0.3}>
            <ButtonText>Login</ButtonText>
         </LoginButton>
         <Title>Hello world</Title>
         <Title isLastChild>Last element</Title>
      </Container>
   );
};