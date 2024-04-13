import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { selectShape } from '../../common/shapeType';
import { velocity } from '../../common/velocity';
import { AppContext } from '../../context/app';
import * as S from './styles';

export const useViewModelSettings = () => {
  const { params } = useRoute()
  const { goBack, navigate } = useNavigation();
  const [selectColor, setSelectColor] = useState('');
  const [selectShapeType, setSelectShapeType] = useState(0);
  const [selectRotation, setSelectRotation] = useState(0);
  const { editDataUser, createDataUser, setLoadingSendData, setUserData } = useContext(AppContext);

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
          isPicked={selectColor === item.color}
        ></S.ContentOpacity>
      </S.PickYourColor>
    );
  };

  const renderItemVelocity = ({ item }: any) => {
    return (
      <S.PickShapeType
        selected={selectRotation === item.rotation}
        onPress={() => {
          setSelectRotation(item.rotation);
        }}>
        <Text>{velocity[item.rotation]}</Text>
      </S.PickShapeType>
    );
  };

  const renderItemShapes = ({ item }: any) => {
    return (
      <S.PickShapeType
        selected={selectShapeType === item.shapeType}
        onPress={() => {
          setSelectShapeType(item.shapeType);
        }}>
        <Text>{selectShape[item.shapeType]}</Text>
      </S.PickShapeType>
    );
  };

  async function editDataFn() {
    setLoadingSendData(true)
    setUserData([])
    let newData = {
      color: selectColor,
      rotation: selectRotation,
      shapeType: selectShapeType,
    };
    if (params) {
      editDataUser(params.item.id, newData);
    } else {
      createDataUser(newData)
    }
    navigate('Home');
    setLoadingSendData(false)
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
  };
};
