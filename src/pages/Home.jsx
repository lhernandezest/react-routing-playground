import React from 'react';
import { Container, Image, Header, Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { useI18n } from '../i18n'

const RickImage = require('../assets/images/UnamusedRick.png');

const Home = () => {
  const { locale, setLocale } = useI18n();

  return (
    <Container text textAlign='center'>
      <Image src={RickImage} centered />
      <Header
        as='h1'
        inverted
        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0 }}
      >
        <FormattedMessage id='home.rick-morty-wiki' />
      </Header>
      <Button onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}>
        <FormattedMessage id='home.switch-language' />
      </Button>
    </Container>
  );
};


export default Home;