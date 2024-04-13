import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.lightColor};
`;

export const MainView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.lightColor};
`;

export const InnerView = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`;

export const StyledText = styled.Text`
  width: 100%;
  font-size: 20px;
  margin: 32px 0px;
  font-weight: 500;
`;

export const InputView = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
`;

export const LabelError = styled.Text`
  width: 100%;
  font-size: 15px;
  color: ${({theme}) => theme.colors.error};
  text-align: center;
  margin-top: 8px;
`;
