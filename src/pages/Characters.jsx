import React, { lazy, Suspense } from 'react';
import { useApi } from '../API';
import { Dimmer, Loader } from 'semantic-ui-react';

const List = lazy(() => import('../components/characters/List'))

const Characters = () => {
  const { isLoading, data } = useApi('character');

  return (
    <Suspense fallback={<Dimmer active><Loader size='massive' /></Dimmer>}>
      <List isLoading={isLoading} data={data} />
    </Suspense>
  );
};

export default Characters;