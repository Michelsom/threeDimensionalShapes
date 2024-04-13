/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './src/context/app';
import { AuthProvider } from './src/context/auth';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';
export function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </AppProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
