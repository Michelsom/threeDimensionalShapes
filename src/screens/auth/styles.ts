import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  background-color: #f2f2f4;
`;

export const MainView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f4;
`;

export const InnerView = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
`;

export const StyledText = styled.Text`
  width: 100%;
  font-size: 20px;
  margin-bottom: 32px;
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
  color: red;
  text-align: center;
  margin-top: 8px;
`;
export const InputLabel = styled.Text`
  width: 100%;
  font-size: 15px;
  color: #444;
  margin-bottom: 8px;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  background-color: #f2f2f2;
  height: 60px;
  border-radius: 8px;
  padding: 20px;
  font-size: 16px;
  border-width: 0.5px;
  border-color: #ddd;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({disabled}) => (disabled ? '#c1c1c1' : '#18AA36')};
  height: 56px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
