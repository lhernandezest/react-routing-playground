import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';

const Info = ({ character }) => {
  return (
    <Grid.Column>
      <Card>
        <Link to={`/characters/${character.id}`}><Image src={character.image} /></Link>
        <Card.Content>
          <Card.Header textAlign='center'>{ character.name }</Card.Header>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Info;