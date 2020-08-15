import React from 'react';
import { useApi } from '../API';
import { List } from '../components/characters';

const Characters = () => {
  const { isLoading, data } = useApi('character');

  return <List isLoading={isLoading} data={data} />
};

export default Characters;