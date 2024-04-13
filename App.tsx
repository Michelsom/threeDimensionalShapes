/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { AppProvider } from './src/context/app';
import { AuthProvider } from './src/context/auth';
import { colors } from './src/global/styles/theme';
import { Routes } from './src/routes';
export function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppProvider>
          <ThemeProvider value={{ dark: false, colors }}>
            <Routes />
          </ThemeProvider>
        </AppProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
