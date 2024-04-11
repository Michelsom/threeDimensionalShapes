import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {createContext, useState} from 'react';
interface AuthContextData {
  user: any | undefined;
  authLoading: boolean;
  error: boolean;
  errorText: string;
  signInWithEmailAndPass: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
export const AuthProvider: React.FC = ({children}: any) => {
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState<any | undefined>();
  const [errorText, setErrorText] = useState('');

  async function signInWithEmailAndPass(email: string, password: string) {
    try {
      setAuthLoading(true);
      setError(false);
      console.log(email, password);
      const {user} = await auth().signInWithEmailAndPassword(email, password);
      setUser(user);
      await AsyncStorage.setItem('@Pigz:userFire', JSON.stringify(user));
    } catch (error: any) {
      console.log(error);
      setErrorText(`Email ou Senha incorretos!`);
      setError(true);
      if (error.code.split('/')[1] === 'wrong-password') {
        setErrorText(`Email ou Senha incorretos!`);
      } else {
        setErrorText('Email ou senha não conferem');
      }
    } finally {
      setAuthLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{user, authLoading, error, errorText, signInWithEmailAndPass}}>
      {children}
    </AuthContext.Provider>
  );
};
