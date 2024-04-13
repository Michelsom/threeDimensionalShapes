import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { selectShape } from '../../common/shapeType';
import { velocity } from '../../common/velocity';
import { AppContext } from '../../context/app';
import theme from '../../global/styles/theme';
import * as S from './styles';

export const useViewModelSettings = () => {
  const { params } = useRoute();
  const { goBack, navigate } = useNavigation();
  const [selectColor, setSelectColor] = useState('');
  const [selectShapeType, setSelectShapeType] = useState(0);
  const [selectRotation, setSelectRotation] = useState(0);
  const { editDataUser, createDataUser, setLoadingSendData, setUserData } =
    useContext(AppContext);

  function clearData() {
    setSelectColor('');
    setSelectShapeType(0);
    setSelectRotation(0);
    goBack();
  }

  const renderItem = ({ item }: any) => {
    return (
      <S.PickYourColor
        selected={selectColor === item.color}
        onPress={() => {
          setSelectColor(item.color);
        }}
        color={item.color}>
        <S.ContentOpacity
          color={item.color}
          isPicked={selectColor === item.color}></S.ContentOpacity>
      </S.PickYourColor>
    );
  };

  const renderItemVelocity = ({ item }: any) => {
    return (
      <S.PickFormShapeType
        selected={selectRotation === item.rotation}
        onPress={() => {
          setSelectRotation(item.rotation);
        }}>
        <Text
          style={{
            color:
              selectRotation === item.rotation
                ? theme.colors.lightColor
                : theme.colors.inputLabel,
            fontWeight: 500,
            fontSize: 16
          }}>
          {velocity[item.rotation]}
        </Text>
      </S.PickFormShapeType>
    );
  };

  const renderItemShapes = ({ item }: any) => {
    return (
      <S.PickFormShapeType
        selected={selectShapeType === item.shapeType}
        onPress={() => {
          setSelectShapeType(item.shapeType);
        }}>
        <Text
          style={{
            color:
              selectShapeType === item.shapeType
                ? theme.colors.lightColor
                : theme.colors.inputLabel,
            fontWeight: 500,
            fontSize: 16
          }}>
          {selectShape[item.shapeType]}
        </Text>
      </S.PickFormShapeType>
    );
  };

  async function editDataFn() {
    setLoadingSendData(true);
    setUserData([]);
    let newData = {
      color: selectColor,
      rotation: selectRotation,
      shapeType: selectShapeType,
    };
    if (params?.item) {
      editDataUser(params.item.id, newData);
    } else {
      createDataUser(newData);
    }
    navigate('Home');
    setLoadingSendData(false);
  }

  return {
    clearData,
    renderItem,
    renderItemShapes,
    renderItemVelocity,
    selectRotation,
    selectColor,
    selectShapeType,
    editDataFn,
    params,
  };
};
