import database from '@react-native-firebase/database';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './auth';

interface AppContextData {
  editDataUser: (id: string, data: any) => void;
  createDataUser: (data: any) => void;
  clearAllData: () => void;
  getDataUser: () => void;
  userData: any;
  isAnimating: boolean;
  setIsAnimating: (x: boolean) => void;
  setLoadingSendData: (x: boolean) => void;
  setUserData: (x: any) => void;
  loadingSendData: boolean;
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }: any) => {
  const { clearAppData, getUserData, uidUser } = useContext(AuthContext);
  const [userData, setUserData] = useState();
  const [isAnimating, setIsAnimating] = useState(true);
  const [loadingSendData, setLoadingSendData] = useState(false);
  console.log(uidUser)
  function clearAllData() {
    clearAppData();
    // setUserData();
  }
  async function editDataUser(id: string, data: any) {
    try {
      console.log(id, data)
      setLoadingSendData(true)
      database()
        .ref(`/users/${uidUser}/${id}`)
        .set(data)
    } catch (error: any) {
      console.log('=====>>>', error)
    } finally {
      setLoadingSendData(false)
    }
  }

  async function createDataUser(data: any) {
    try {
      console.log('createDataUser', uidUser)
      setLoadingSendData(true)
      database()
        .ref(`/users/${uidUser}`)
        .push(data)
    } catch (error: any) {
      console.log('dentro de catch=====>>>', error)
    } finally {
      setLoadingSendData(false)
    }
  }

  async function getDataUser() {
    database()
      .ref(`/users/${uidUser}`)
      .on('value', snapshot => {
        const data = snapshot.val();
        console.log(`-------`, data)
        setUserData(data);
      });
  }

  useEffect(() => {
    getUserData()
    if (uidUser) getDataUser();
  }, [uidUser]);

  return (
    <AppContext.Provider
      value={{
        setUserData,
        editDataUser,
        userData,
        clearAllData,
        getDataUser,
        isAnimating,
        setIsAnimating,
        loadingSendData,
        setLoadingSendData,
        createDataUser
      }}>
      {children}
    </AppContext.Provider>
  );
};
