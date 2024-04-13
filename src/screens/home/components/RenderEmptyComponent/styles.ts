import styled from 'styled-components/native';

export const ContentEmptyComponent = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const TextAddShape = styled.Text`
  color: ${({theme}) => theme.colors.colorText};
  font-size: 16px;
  font-weight: 600;
`;
