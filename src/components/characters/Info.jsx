import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const Info = ({ character }) => {
  return (
    <Grid.Column>
      <Card>
        <Image src={character.image} />
        <Card.Content>
          <Card.Header textAlign='center'>{ character.name }</Card.Header>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Info;