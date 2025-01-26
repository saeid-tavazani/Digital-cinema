import MovieDetail from '@/components/movieDetail';
import { MovieType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
const MovieCard = ({ movieId, Actor, Description, Rating, Genre, Release, Thumbnail, Title }: MovieType) => {
  return (
    <Link key={movieId} href="#" className="rounded-lg overflow-hidden w-full flex flex-col md:flex-row gap-5 bg-secondary p-4">
      <Image src={Thumbnail} alt={Title} width={200} height={300} className="rounded-md" />
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold mb-4">{Title}</h2>
        <p>{Release}</p>
        <MovieDetail text="Genre" detail={Genre} />
        <MovieDetail text="Actor" detail={Actor} />
        <MovieDetail text="Rating" detail={Rating} />
        <p>{Description}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
