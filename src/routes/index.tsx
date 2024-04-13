import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
export const Routes = () => {
  const { user } = useContext(AuthContext);

  return user ? <AppRoutes /> : <AuthRoutes />;
};
