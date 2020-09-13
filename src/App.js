import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainMenu } from './components';
import { Home, Characters, Character, Login } from './pages';
import { Container } from 'semantic-ui-react';
import { AuthProvider } from './auth';
import ProtectedRoute from './auth/ProtectedRoute';
import { withI18n } from './i18n';

const App = () => {
  return (
    <AuthProvider>
      <Container>
        <BrowserRouter>
          <MainMenu />
          <Switch>
            <Route path='/characters/:id'><Character /></Route>
            <ProtectedRoute path='/characters'><Characters /></ProtectedRoute>
            <Route path='/login'><Login /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
};

export default withI18n(App);
