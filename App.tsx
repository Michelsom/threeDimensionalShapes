/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {AuthProvider} from './src/Context/auth';
import {colors} from './src/Global/styles/theme';
import {Routes} from './src/Routes';
export function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider value={{dark: false, colors}}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
