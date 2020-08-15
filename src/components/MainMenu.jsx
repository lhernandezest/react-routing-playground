import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { useAuth } from '../auth';

const MainMenu = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const logout = () => setIsLoggedIn(false)

  return (
    <Menu inverted>
      <Menu.Item><Icon name='home' /></Menu.Item>
      <Menu.Item><FormattedMessage id='sections.characters' /></Menu.Item>
      <Menu.Menu position="right">
        { isLoggedIn
          ? <Menu.Item onClick={logout}><FormattedMessage id="login.logout" /></Menu.Item>
          : <Menu.Item><FormattedMessage id="login.login" /></Menu.Item>
        }
      </Menu.Menu>
    </Menu>
  );
};

export default MainMenu;