import styled from 'styled-components/native';
interface ContainerProps {
  width?: number;
}
export const Container = styled.View<ContainerProps>`
  width: ${props => (props.width ? props.width : 100)}%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 12px;
`;
export const Label = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.colorText};
  margin-bottom: 9px;
`;
interface BoxInputProps {
  focus: boolean;
  enable?: boolean;
}
export const TextExcludeText = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.lightColor};
`;
export const BoxInput = styled.View<BoxInputProps>`
  height: 56px;
  background: ${({theme}) => theme.colors.disableButton};
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 10px;
  flex-direction: row;
  padding: 020px;
  align-items: center;
  justify-content: space-between;
  border-color: ${({focus}) =>
    focus
      ? ({theme}) => theme.colors.lightColor
      : ({theme}) => theme.colors.lightColor};
`;
interface InputProps {
  type: 'password' | 'default' | 'number' | 'email-address';
}
export const InputText = styled.TextInput<InputProps>`
  height: 50px;
  font-size: 17px;
  width: ${props => (props.type === 'password' ? 80 : 100)}%;
`;
