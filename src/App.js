import React from 'react';
import { MainMenu } from './components';
import { Home, Characters, Character, Login } from './pages';
import { Container } from 'semantic-ui-react';
import { AuthProvider } from './auth';
import { withI18n } from './i18n';

const App = () => {
  return (
    <AuthProvider>
      <Container>
        <MainMenu />
        <Login />
      </Container>
    </AuthProvider>
  );
};

export default withI18n(App);
