import React from 'react';
import { useApi } from '../API';
import { Detail } from '../components/characters';

const Character = () => {
  const { isLoading, data } = useApi('character', 1);

  return <Detail isLoading={isLoading} data={data} />
};

export default Character;