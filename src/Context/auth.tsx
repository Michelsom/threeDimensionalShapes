import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, { firebase } from '@react-native-firebase/auth';
import React, { createContext, useState } from 'react';
interface AuthContextData {
  user: any | undefined;
  authLoading: boolean;
  error: boolean;
  errorText: string;
  signInWithEmailAndPass: (email: string, password: string) => void;
  clearAppData: () => void;
  getUserData: () => void;
  // setUidUser: (x: boolean) => void;
  uidUser: boolean;

}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
export const AuthProvider: React.FC = ({ children }: any) => {
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState<any | undefined>();
  const [uidUser, setUidUser] = useState<any | undefined>();
  const [errorText, setErrorText] = useState('');

  async function getUserData() {
    let resp = firebase?.auth()?.currentUser?.uid
    if (resp) return setUidUser(resp)
  }
  async function signInWithEmailAndPass(email: string, password: string) {
    try {
      setAuthLoading(true);
      setError(false);
      const { user } = await auth().signInWithEmailAndPassword(email, password);
      setUser(user);
      await AsyncStorage.setItem('@Pigz:userFire', JSON.stringify(user))
      // getUserData;
    } catch (error: any) {
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
  function clearAppData() {
    setUser('');
    AsyncStorage.clear()
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        authLoading,
        error,
        errorText,
        signInWithEmailAndPass,
        clearAppData,
        getUserData,
        uidUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

