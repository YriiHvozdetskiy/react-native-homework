import styled from 'styled-components/native';

export const Container = styled.View`


`
export const StyledTextInput = styled.TextInput`
  font-family: 'Roboto-Regular';
  height: 50px;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  line-height: 18px;
  background: #F6F6F6;
  border-radius: 8px;
  border: ${props => (props.isFocused ? '1px solid #FF6C00' : '1px solid #E8E8E8')};
  color: #212121;
`;

export const ErrorText = styled.Text`
  color: red;
`