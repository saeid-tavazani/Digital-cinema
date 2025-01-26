import Carousel from '@/components/ui/carousel';
import { Data } from '@/types';
import React from 'react';

const MovieSlider = async () => {
  const url = `${process.env.API_URL}/recommendations/19995`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY as string,
      'x-rapidapi-host': process.env.API_HOST as string,
    },
  };
  const response = await fetch(url, options);

  if (!response.ok) throw new Error(`An error has occured: ${response.status}`);

  const movies: Data = await response.json();

  return <Carousel slides={movies.result.data.slice(0, 6)} />;
};

export default MovieSlider;
