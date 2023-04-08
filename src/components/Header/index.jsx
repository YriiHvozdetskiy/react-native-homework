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
            <ButtonText>{'login'}</ButtonText>
         </LoginButton>
         <Title>Hello</Title>
         <Title isLastChild>Last element</Title>
      </Container>
   );
};