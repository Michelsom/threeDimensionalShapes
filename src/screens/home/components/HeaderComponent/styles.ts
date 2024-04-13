import styled from 'styled-components/native';

export const BoxHeader = styled.View`
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
export const ButtonExit = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 56px;
  width: 56px;
  align-items: flex-end;
  justify-content: center;
`;
