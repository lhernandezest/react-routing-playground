import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../API';
import { Detail } from '../components/characters';

const Character = () => {
  const { id } = useParams();
  const { isLoading, data } = useApi('character', id);

  return <Detail isLoading={isLoading} data={data} />
};

export default Character;