import { Data } from '@/types';

import React from 'react';
import MovieCard from './movieCard';
const Movies = async ({ api }: { api: string }) => {
  const url = `${process.env.API_URL}/${api}`;
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

  return (
    <section className="w-full">
      <div className="mt-5 flex flex-col gap-3">
        {movies.result.data.map(movie => (
          <MovieCard key={movie.movieId} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
