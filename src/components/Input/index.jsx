import {
   Container, ErrorText, StyledTextInput,
} from './styled';
import React, {useState} from 'react';

export const Input = (props) => {
   const {
      handleChange,
      onFocus,
      onBlur,
      value,
      placeholder,
      boole,
      errors,
      isFocused,
      keyboardType = 'default',
      autoCapitalize,
      secureTextEntry,
   } = props

   const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

   return (
      <Container>
         <StyledTextInput
            onChangeText={handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            placeholder={placeholder}
            isFocused={isFocused}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={isPasswordVisible}
         />
         {boole && <ErrorText>{errors.email}</ErrorText>}
      </Container>
   )
}
