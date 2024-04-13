import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const GlobalViewActivityIndicator = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  background: #fff;
`;
export const GlobalText = styled.Text`
  color: ${({theme}) => theme.colors.colorText};
  font-size: 18px;
  margin-top: 20px;
`;
