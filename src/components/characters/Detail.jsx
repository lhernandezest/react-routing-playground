import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { withLoadingState } from '../../HoC';

const Detail = ({ data }) => {
  return (
    <Container textAlign="center">
      <Card centered>
        <Image src={data.image} />
        <Card.Content>
          <Card.Header textAlign='center'>{ data.name }</Card.Header>
          <Card.Description>
            <strong><FormattedMessage id="characters.species" />: </strong>
            <FormattedMessage id={`characters.species.${data.species.toLowerCase()}`} defaultMessage={data.species} />
          </Card.Description>
          <Card.Description>
            <strong><FormattedMessage id="characters.gender" />: </strong>
            <FormattedMessage id={`characters.gender.${data.gender.toLowerCase()}`} defaultMessage={data.gender} />
          </Card.Description>
          <Card.Description>
            <strong><FormattedMessage id="characters.status" />: </strong>
            <FormattedMessage id={`characters.status.${data.status.toLowerCase()}`} defaultMessage={data.status} />
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default withLoadingState(Detail);