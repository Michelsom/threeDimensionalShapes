import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
interface ButtonProps {
  type: 'solid' | 'outline' | 'transparent';
  color: 'secondaryColor' | 'disabledColor';
  width?: number;
  disable?: boolean;
  transparent?: boolean;
}

const colors = [
  {id: 2, name: 'secondaryColor', color: theme.colors.secondaryColor},
  {id: 3, name: 'disabledColor', color: theme.colors.borderColorButton},
];

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<ButtonProps>`
  height: 56px;
  justify-content: center;
  align-items: center;
  width: ${({width}) => (width ? width : 100)}%;
  margin: 10px 0;
  overflow: hidden;
  border-radius: 8px;
  border-width: ${({type}) => (type === 'outline' ? 1 : 0)}px;
  border-color: ${({type, color}) =>
    type === 'outline'
      ? colors.find(e => e.name === color)?.color
      : 'transparent'};
  background-color: ${({type, color, disable}) =>
    !disable
      ? type === 'solid'
        ? colors.find(e => e.name === color)?.color
        : type === 'outline'
        ? theme.colors.lightColor
        : type === 'transparent'
        ? 'transparent'
        : theme.colors.lightColor
      : theme.colors.disableText};
`;

export const TextButton = styled.Text<ButtonProps>`
  font-size: 18px;
  font-weight: 500;
  color: ${({type, color}) =>
    type === 'solid' && color === 'disabledColor'
      ? ({theme}) => theme.colors.SixSix
      : type === 'solid'
      ? ({theme}) => theme.colors.lightColor
      : type === 'outline'
      ? ({theme}) => theme.colors.defaultTextDescription
      : colors.find(e => e.name === color)?.color};
`;
