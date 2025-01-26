import Movies from '@/components/movies';
import MovieSlider from '@/components/movieSlider';
import MoviesSkeleton from '@/components/moviesSkeleton';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

const Page = () => {
  return (
    <main className="container overflow-hidden">
      <Suspense fallback={<Skeleton className="w-full h-[65vmin] rounded-[1%]" />}>
        <MovieSlider />
      </Suspense>

      <Suspense fallback={<MoviesSkeleton />}>
        <Movies api="upcoming" />
      </Suspense>
    </main>
  );
};

export default Page;
