import React from 'react';
import { TouchableOpacity } from 'react-native';
import { InputProps } from '../../Models/Input';
import * as Icons from '../../assets';
import theme from '../../global/styles/theme';
import * as S from './styles';
import { controllerInput } from './viewController';

export const Input = (props: InputProps) => {
  const {
    focus,
    setFocus,
    setShowPass,
    showPass,
  } = controllerInput();

  const {
    inputRef,
    value,
    type,
    label,
    placeholder,
    width,
    setValue,
    enable,
    maxLength,
    accessibilityLabel
  } = props

  return (
    <S.Container width={width}>
      {label && <S.Label>{label}</S.Label>}
      <S.BoxInput enable={enable} focus={focus} >
        <S.InputText
          accessible={true}
          accessibilityLabel={accessibilityLabel}
          ref={inputRef}
          style={{ flex: 1 }}
          value={value}
          editable={enable}
          keyboardType={
            type === 'password'
              ? 'number-pad'
              : type === 'number'
                ? 'number-pad'
                : type === 'email-address'
                  ? 'email-address'
                  : 'default'
          }
          secureTextEntry={showPass && type === 'password'}
          placeholder={placeholder}
          type={type}
          onBlur={() => {
            setFocus(false);
          }}
          onFocus={e => {
            if (e.currentTarget) {
              setFocus(true);
            }
          }}
          maxLength={maxLength}
          selectionColor={theme.colors.colorText}
          onChangeText={text => {
            setValue(text);
          }}
        />
        {type === 'password' && (
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              setShowPass(!showPass);
            }}>
            {showPass ? (
              <Icons.IsVisible width={25} height={25} />
            ) : (
              <Icons.IsNotVisible width={25} height={25} />
            )}
          </TouchableOpacity>
        )}
      </S.BoxInput>
    </S.Container>
  );
};
