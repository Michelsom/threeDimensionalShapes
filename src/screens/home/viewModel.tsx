import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useState } from 'react';
import { View } from 'react-native';
import { colorsToPick } from '../../common/colors';
import { selectShape } from '../../common/shapeType';
import { velocity } from '../../common/velocity';
import { FirstScene } from '../../components/FirstScene';
import { AppContext } from '../../context/app';
import * as S from './styles';
export const useViewModelHome = () => {

  const [color, setColor] = useState('#f1f');

  const [shapeType, setShapeType] = useState(1);
  const [rotation, setRotation] = useState(0.04);
  const [colorNumber, setColorNumber] = useState<number>(1);
  const { navigate } = useNavigation();
  const { userData, clearAllData, setIsAnimating, loadingSendData, getDataUser } = useContext(AppContext);
  let transformInArray = userData
    ? Object.keys(userData).map(key => ({ id: key, ...userData[key] }))
    : [];
  function navigateToSettings(item?: any) {
    setIsAnimating(false)
    navigate('Settings', { item });
  }

  function selectShapeTypeFn() {
    setShapeType(prevState => (prevState >= 3 ? 1 : prevState + 1));
  }
  function selectColor(setColorNumber: React.Dispatch<React.SetStateAction<number>>, setColor: React.Dispatch<React.SetStateAction<string>>, colorNumber: number) {
    setColorNumber(prevState => prevState + 1);
    setColor(colorsToPick[colorNumber].color);
  }
  const renderItem = ({ item }: any) => {
    const { color, rotation, shapeType, id } = item;
    return (
      <S.CenterBox>
        <S.TitleFigure>{selectShape[shapeType]}</S.TitleFigure>
        <FirstScene
          key={`${id}-${color}`}
          color={color}
          rotations={rotation}
          shapeType={selectShape[shapeType]}
        />
        <S.Row>
          <View style={{ position: 'absolute', left: 8, bottom: 0, }}>
            <S.Content>
              <S.Title>{velocity[rotation]}</S.Title>
            </S.Content>
            <S.ColorBox color={color} />
            <S.ContentText>
              <S.Title numberOfLines={1}>{selectShape[shapeType]}</S.Title>
            </S.ContentText>
          </View>
          <S.Button
            onPress={() => {
              navigateToSettings(item);
            }}>
            <S.TitleButton>Editar</S.TitleButton>
          </S.Button>
        </S.Row>
      </S.CenterBox >
    );
  };

  const RenderFooterComponent = () => <S.Separator />;
  useFocusEffect(useCallback(() => {
    getDataUser()
  }, []))
  return {
    navigateToSettings,
    color,
    rotation,
    shapeType,
    userData,
    renderItem,
    navigate,
    clearAllData,
    loadingSendData,
    transformInArray,
    RenderFooterComponent
  };
};


