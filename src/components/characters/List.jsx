import React from 'react';
import { Grid } from 'semantic-ui-react';
import { withLoadingState } from '../../HoC';
import Info from './Info';

const CharactersList = ({ data }) => {
  return (
    <Grid stackable columns={4}>
      { data.results.map(character => <Info key={character.id} character={character} />) }
    </Grid>
  );
};

export default withLoadingState(CharactersList);