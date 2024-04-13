import React from 'react';
import { ActivityIndicator, TextInput, View } from 'react-native';
import * as S from './styles';
import { useViewModelAuth } from './viewModel';

export const Login = () => {
  const { password, setPassword, setUserEmail, loginWithEmail, userEmail, authLoading, errorText } = useViewModelAuth();

  return (
    <S.SafeArea accessible={true} accessibilityLabel="Área segura">
      <S.MainView accessible={true} accessibilityLabel="Visão principal">
        <S.InnerView accessible={true} accessibilityLabel="Faça login para entrar">
          <S.StyledText>Faça Login para entrar</S.StyledText>
          <S.InputView accessible={true} accessibilityLabel="Visão de entrada de email">
            <S.InputLabel>email de usuario</S.InputLabel>
            <S.StyledInput
              accessible={true}
              accessibilityLabel="Digite seu email"
              placeholder="usuario@gmail.com"
              keyboardType="default"
              onChangeText={e => {
                setUserEmail(e);
              }}
              placeholderTextColor={'#b1b1b1'}
            />
          </S.InputView>
          <S.InputView accessible={true} accessibilityLabel="Visão de entrada de senha">
            <S.InputLabel>Senha</S.InputLabel>
            <S.StyledInput
              accessible={true}
              accessibilityLabel="Digite sua senha"
              placeholderTextColor={'#b1b1b1'}
              placeholder="******"
              keyboardType="number-pad"
              onChangeText={e => {
                setPassword(e);
              }}
              secureTextEntry={true}
            />
          </S.InputView>
          <View style={{ height: 60, justifyContent: 'flex-start', alignItems: 'center' }}>
            {errorText ?
              <S.LabelError>{errorText}</S.LabelError>
              : null
            }
          </View>
          <S.StyledButton
            onPress={loginWithEmail}
            disabled={userEmail.length === 0 || password.length === 0 || authLoading}
            accessible={true}
            accessibilityLabel="Botão de login"
          >
            {authLoading ?
              <ActivityIndicator size={40} color={'#fff'} />
              : <S.ButtonText>Entrar</S.ButtonText>
            }
          </S.StyledButton>
        </S.InnerView>
      </S.MainView>
      <TextInput accessible={true} accessibilityLabel="Entrada de texto" />
    </S.SafeArea>
  );
};
