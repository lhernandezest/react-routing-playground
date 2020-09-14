import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAuth } from '../auth';

const MainMenu = () => {
  const intl = useIntl();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const logout = () => setIsLoggedIn(false);

  return (
    <Menu inverted>
      <Menu.Item><Link to={intl.formatMessage({ id: 'routes.home'})}><Icon name='home' /></Link></Menu.Item>
      <Menu.Item><Link to={intl.formatMessage({ id: 'routes.characters'})}><FormattedMessage id='sections.characters' /></Link></Menu.Item>
      <Menu.Menu position="right">
        { isLoggedIn
          ? <Menu.Item onClick={logout}><FormattedMessage id="login.logout" /></Menu.Item>
          : <Menu.Item><Link to={intl.formatMessage({ id: 'routes.login'})}><FormattedMessage id="login.login" /></Link></Menu.Item>
        }
      </Menu.Menu>
    </Menu>
  );
};

export default MainMenu;