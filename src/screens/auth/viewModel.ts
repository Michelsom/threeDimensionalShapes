import {useContext, useState} from 'react';
import {AuthContext} from '../../context/auth';

export const useViewModelAuth = () => {
  const {signInWithEmailAndPass, authLoading, errorText} =
    useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginWithEmail() {
    signInWithEmailAndPass(userEmail, password);
  }

  return {
    signInWithEmailAndPass,
    userEmail,
    setUserEmail,
    password,
    setPassword,
    loginWithEmail,
    authLoading,
    errorText,
  };
};
