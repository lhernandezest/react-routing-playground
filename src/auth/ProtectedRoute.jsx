import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './';

const ProtectedRoute = (props) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Route {...props} /> : <Redirect to='/login' />
}

export default ProtectedRoute;