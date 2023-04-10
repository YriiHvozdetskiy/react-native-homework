import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  background-color: green;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Medium';
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  ${(props) => props.isLastChild && 'margin-bottom: 0;'}
  color: ${(props) =>
          props.isLastChild ? '#00FF00' : '#FFFFFF'};
  padding: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  padding: 15px;
  border: tomato 1px solid;
`

export const ButtonText = styled.Text`
  color: #fff;
`
//fontFamily: 'Roboto-Medium';
//font-family: 'Montserrat-Medium';

export  const TitleCustomFont = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 30px;

`