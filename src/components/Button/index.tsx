import React from 'react';


import { ButtonProps } from '../../Models/button';
import * as S from './styles';
import { controllerGlobalButton } from './viewController';

export const GlobalButton = (props: ButtonProps) => {
  const { buttonContent, color, disable, handleButton, loading, text, type, transparent, width } =
    controllerGlobalButton(props);
  return (
    <S.Button
      transparent={transparent}
      disable={disable}
      width={width}
      color={color}
      type={type}
      onPress={() => {
        if (!disable || loading) {
          handleButton();
        }
      }}>
      {buttonContent}
    </S.Button>
  );
};
