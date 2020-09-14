import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { MainMenu } from './components';
import { Home, Characters, Character, Login } from './pages';
import { Container } from 'semantic-ui-react';
import { AuthProvider } from './auth';
import { withI18n } from './i18n';

const App = () => {
  const intl = useIntl();

  return (
    <AuthProvider>
      <Container>
        <BrowserRouter>
          <MainMenu />
          <Switch>
            <Route path={intl.formatMessage({ id: 'routes.characters' })} exact><Characters /></Route>
            <Route path={intl.formatMessage({ id: 'routes.character-detail' })}><Character /></Route>
            <Route path={intl.formatMessage({ id: 'routes.login' })}><Login /></Route>
            <Route path={intl.formatMessage({ id: 'routes.home' })}><Home /></Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
};

export default withI18n(App);
