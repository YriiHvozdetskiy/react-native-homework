import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1 0 100%;
`;

export const StyledBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  background: #FFFFFF;
  width: 100%;
  // видає помилку на андроїд -- border-radius: 25px 25px 0 0; 
  padding: 92px 16px 80px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`