import {
   Container, ErrorText, StyledTextInput,
} from './styled';
import React, {useState} from 'react';

export const Input = (props) => {
   const {
      handleChange,
      value,
      placeholder,
      boole,
      errors,
      keyboardType = 'default',
      autoCapitalize,
      secureTextEntry,
      setIsShowKeyboard,
   } = props

   const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
   const [isFocused, setIsFocused] = useState(false);


   return (
      <Container>
         <StyledTextInput
            onChangeText={handleChange}
            onBlur={() => {
               setIsFocused(prevState => !prevState)
               setIsShowKeyboard(prevState => !prevState)
            }}
            onFocus={() => {
               setIsFocused(prevState => !prevState)
               setIsShowKeyboard(prevState => !prevState)
            }}
            value={value}
            placeholder={placeholder}
            isFocused={isFocused}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={isPasswordVisible}
         />
         {boole && <ErrorText>{errors}</ErrorText>
         }
      </Container>
   )
}
