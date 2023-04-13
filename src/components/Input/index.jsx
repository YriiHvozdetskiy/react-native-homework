import {
   Container,
   ErrorText,
   StyledTextInput, ToggleSecureText,

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

   const toggleSecureEntry = () => {
      setIsPasswordVisible(prev => !prev);
   };

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
         {/*/TODO додати падінги і зроби помилки абсолютом*/}
         {boole && <ErrorText>{errors}</ErrorText>}

         {secureTextEntry && value?.length > 0 &&
            <ToggleSecureText onPress={toggleSecureEntry}>
               {isPasswordVisible ? 'Показати' : 'Сховати'}
            </ToggleSecureText>}
      </Container>
   )
}
