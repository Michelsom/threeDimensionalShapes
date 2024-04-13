import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView``;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  align-items: center;
`;

export const CenterBox = styled.View`
  width: 360px;
  height: 400px;
  border-width: 2px;
  border-color: #eee;
  background: #fff;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #fff;
  width: ${Dimensions.get('screen').width / 4 - 25}px;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 8px 0px;
  border-color: #eee;
  border-width: 2px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

interface colorPicked {
  color: string;
}
export const ColorBox = styled.View<colorPicked>`
  width: 40px;
  height: 40px;
  background-color: ${({color}) => color};
  border-radius: 4px;
`;

export const TitleFigure = styled.Text`
  width: 100%;
  padding: 8px;
  font-size: 24px;
  font-weight: 700;
`;

export const Separator = styled.View`
  height: 180px;
`;
