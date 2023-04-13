import {
   StyledButton, StyledText,
} from './styled';

export const Button = (props) => {
   const {
      text,
      handlePress,
      style,
   } = props

   return (
      <StyledButton
         style={style}
         onPress={handlePress}
      >
         <StyledText>{text}</StyledText>
      </StyledButton>
   )
}