import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.lightColor};
`;

export const Card = styled.View`
  background-color: ${({theme}) => theme.colors.lightColor};
  width: 100%;
  height: ${Dimensions.get('window').height}px;
  padding: 20px 20px;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.colorText};
  font-size: 17px;
  font-weight: 500;
`;
export const ButtonExit = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 33%;
`;
export const ContentTypeShape = styled.View`
  width: 100%;
  height: 16%;
  margin-top: 24px;
`;
export const ContentVelocity = styled.View`
  width: 100%;
  height: 16%;
  margin: 24px 0px;
`;
interface colorPicked {
  color?: string;
  selected?: boolean;
  isPicked?: boolean;
}

export const PickYourColor = styled.TouchableOpacity<colorPicked>`
  width: 52px;
  height: 52px;
  background: ${({color}) => color};
  margin: 4px 2px;
  border-radius: 8px;
  border-width: ${({selected}) => (selected ? 2 : 0)}px;
  border-color: ${({selected, theme}) =>
    selected ? theme.secondaryColor : theme.secondaryBackgroundColor};
`;
export const ContentOpacity = styled.View<colorPicked>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({isPicked, color}) =>
    isPicked || !color ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.3)'};
`;

interface SelectedProps {
  selected: boolean;
}
export const PickShapeType = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<SelectedProps>`
  width: 100px;
  height: 56px;
  background-color: ${({theme}) => theme.colors.lightColor};
  border-radius: 8px;
  margin: 4px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({selected, theme}) =>
    selected ? theme.secondaryColor : theme.secondaryBackgroundColor};
`;
export const PickFormShapeType = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<SelectedProps>`
  height: 56px;
  background-color: ${({theme, selected}) =>
    selected ? theme.colors.secondaryColor : theme.colors.borderColorButton};
  border-radius: 8px;
  margin: 4px;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
`;
export const ButtonSave = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${({disabled, theme}) =>
    disabled ? theme.secondaryBackgroundColor : theme.secondaryColor};
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  border-radius: 8px;
`;
export const ButtonContainer = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
export const ContentHeader = styled.View`
  width: 100%;
  flex-direction: row;
  height: 56px;
  align-items: center;
`;
export const TextSave = styled.Text`
  color: ${({theme}) => theme.colors.lightColor};
  font-size: 18px;
  font-weight: 500;
`;
export const TitleHeaderComponent = styled.Text`
  padding: 8px 0px;
  color: ${({theme}) => theme.colors.colorText};
  font-size: 16px;
`;
