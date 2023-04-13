import {
   TitleText,
} from './styled';

export const Title = ({text, style}) => {

   return (
      <TitleText style={style}>{text}</TitleText>
   )
}