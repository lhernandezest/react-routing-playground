import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';
import { useIntl } from 'react-intl';

const Info = ({ character }) => {
  const intl = useIntl();
  const characterPath = intl
    .formatMessage({ id: 'routes.character-detail' })
    .replace(':id', character.id)

  return (
    <Grid.Column>
      <Card>
        <Link to={characterPath}><Image src={character.image} /></Link>
        <Card.Content>
          <Card.Header textAlign='center'>{ character.name }</Card.Header>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Info;