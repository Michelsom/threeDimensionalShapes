import React from 'react';
import { View } from 'react-native';
import { GlobalButton } from '../../components/Button';
import { Input } from '../../components/InputGlobal';
import * as S from './styles';
import { useViewModelAuth } from './viewModel';

export const Login = () => {
  const { password, setPassword, setUserEmail, loginWithEmail, userEmail, authLoading, errorText } = useViewModelAuth();

  return (
    <S.SafeArea accessible={true} accessibilityLabel="Área segura">
      <S.MainView accessible={true} accessibilityLabel="Visão principal" >
        <S.StyledText>Login</S.StyledText>
        <Input
          accessibilityLabel={"Digite seu email"}
          value={userEmail}
          setValue={e => {
            setUserEmail(e);
          }}
          type="default"
          placeholder="usuario@gmail.com"
          label='Email'
        />
        <Input
          accessibilityLabel="Digite sua senha"
          value={password}
          setValue={e => {
            setPassword(e);
          }}
          type="password"
          placeholder="******"
          label='Senha'
        />
        <View style={{ height: 60, justifyContent: 'flex-start', alignItems: 'center' }}>
          {errorText ?
            <S.LabelError>{errorText}</S.LabelError>
            : null
          }
        </View>
        <GlobalButton
          color='secondaryColor'
          handleButton={loginWithEmail}
          text='Entrar'
          type='solid'
          disable={userEmail.length === 0 || password.length === 0 || authLoading}
          loading={authLoading}
          width={100}
        />
      </S.MainView>
    </S.SafeArea>
  );
};
