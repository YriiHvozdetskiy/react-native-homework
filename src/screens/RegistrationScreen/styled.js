import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1 0 100%;
`;

export const StyledBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Wrapper = styled.View`
  background: #FFFFFF;
  width: 100%;
  padding: ${(props) => props.IsShowKeyboard ? '92px 16px 80px' : '92px 16px 20px'};
  // видає помилку на андроїд -- border-radius: 25px 25px 0 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  justify-content: flex-end;
`
export const TextLink = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #1B4371;
  margin-top: 16px;
`

export const Picture = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background: #F6F6F6;
`