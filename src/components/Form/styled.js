import styled from 'styled-components/native';

export const Container = styled.View`
  background: #FFFFFF;
  width: 100%;
  // видає помилку на андроїд -- border-radius: 25px 25px 0 0; 
  padding: 92px 16px 80px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
