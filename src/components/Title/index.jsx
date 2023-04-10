import {
   TitleText,
} from './styled';

export const Title = ({text, distance}) => {

   return (
      <TitleText distance={distance}>{text}</TitleText>
   )
}