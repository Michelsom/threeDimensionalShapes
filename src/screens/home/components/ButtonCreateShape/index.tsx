import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as S from './styles';

export const ButtonCreateShape = () => {
  const { navigate } = useNavigation();
  function navigateToSettings() {
    navigate('Settings');
  }
  return (
    <S.ButtonContainer>
      <S.ButtonAddShape onPress={navigateToSettings}>
        <S.TextAddShape>Adicionar nova forma</S.TextAddShape>
      </S.ButtonAddShape>
    </S.ButtonContainer>
  );
};
