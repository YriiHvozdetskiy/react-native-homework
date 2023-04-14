import {
   ButtonIcon,
   ButtonText,
   StyledText,
} from './styled';

export const Button = (props) => {
   const {
      text,
      handlePress,
      style,
      icon,
      colorSvg,
   } = props

   const IconComponent = icon;

   return (
      <>
         {text && (
            <ButtonText
               style={style}
               onPress={handlePress}
            >
               <StyledText>{text}</StyledText>
            </ButtonText>
         )}

         {icon && (
            <ButtonIcon
               style={style}
               onPress={handlePress}
            >
               <IconComponent color={colorSvg}/>
            </ButtonIcon>
         )}
      </>
   )
}