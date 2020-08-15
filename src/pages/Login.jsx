import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { useAuth } from '../auth';

const MrMeeseeksImg = require('../assets/images/MrMeeseeks.png');

const LoginForm = () => {
  const { setIsLoggedIn } = useAuth();
  const [username, setUsername] =  useState('');
  const [password, setPassword] = useState('');
  const [error, setError] =  useState('');

  const onLoginClick = () => {
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setError('Error');
    }
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' style={{ color: '#63CAEF' }} textAlign='center'>
          <Image src={MrMeeseeksImg} />
          <FormattedMessage id="login.login-instructions" />
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color='teal' fluid size='large' onClick={onLoginClick}> 
              <FormattedMessage id="login.login" />
            </Button>
            { error !== '' && <Message negative>{ error }</Message> }
          </Segment>
        </Form>
        <Message>
          <strong><FormattedMessage id="login.username" />:</strong> user
          <br />
          <strong><FormattedMessage id="login.password" />:</strong> password
        </Message>
      </Grid.Column>
    </Grid>
  )
};

export default LoginForm;