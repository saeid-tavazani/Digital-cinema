interface Schema<T> {
  version: string;
  result: {
    data: T;
  };
}

export interface MovieType {
  Id: number;
  movieId: number;
  Genre: string;
  Director: string;
  Actor: string;
  Title: string;
  Duration: number;
  Release: string;
  Description: string;
  Rating: number;
  Trailer: string;
  Country: string;
  Thumbnail: string;
  Cover: string;
  Watch: string;
}

export type Data = Schema<MovieType[]>;
