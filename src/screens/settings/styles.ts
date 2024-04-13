import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #ffffff;
`;

export const Card = styled.View`
  background: #ffffff;
  width: 100%;
  height: ${Dimensions.get('window').height}px;
  padding: 20px 20px;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.Text`
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
  margin-top: 24px;
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
  border-width: ${({selected}) => (selected ? 2 : 1)}px;
  border-color: ${({selected}) => (selected ? '#18AA36' : '#ddd')};
`;
export const ContentOpacity = styled.View<colorPicked>`
  width: 100%;
  height: 100%;
  background: ${({isPicked, color}) =>
    isPicked || !color ? 'rgba(0, 0, 0, 0.0)' : 'rgba(255, 255, 255, 0.4)'};
`;

interface SelectedProps {
  selected: boolean;
}
export const PickShapeType = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<SelectedProps>`
  width: 100px;
  height: 56px;
  background: #fff;
  border-radius: 8px;
  margin: 4px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({selected}) => (selected ? '#18AA36' : '#ddd')};
`;
export const ButtonSave = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background: ${({disabled}) => (disabled ? '#ddd' : '#18AA36')};
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
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;
export const TitleHeaderComponent = styled.Text`
  padding: 8px 0px;
  color: #212121;
  font-size: 14px;
`;
