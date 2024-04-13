import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonProps } from '../../Models/button';
import theme from '../../global/styles/theme';
import * as S from './styles';

export const controllerGlobalButton = ({ color, handleButton, loading, disable, text, type, transparent, width

}: ButtonProps) => {
  const colors = useMemo(() => {
    return [
      { id: 2, name: 'secondaryColor', color: theme.colors.secondaryColor },
      { id: 3, name: 'disabledColor', color: theme.colors.lightColor },
    ];
  }, []);
  const colorValue = useMemo(() => {
    return colors.find(e => e.name === color)?.color;
  }, [color, colors]);

  const handlePress = useMemo(() => {
    () => { };
  }, [disable, loading, handleButton]);

  const buttonContent = useMemo(() => {
    if (loading) {
      return (
        <ActivityIndicator
          color={
            type === 'solid' ? theme.colors.lightColor : colorValue
          }
        />
      );
    }
    return (
      <S.TextButton
        disable={disable}
        color={color}
        type={type}>
        {text}
      </S.TextButton>
    );
  }, [
    loading,
    type,
    colorValue,
    disable,
    color,
    text,
  ]);

  return {
    buttonContent, color, disable, handleButton, loading, text, type, transparent, width
  }

};
