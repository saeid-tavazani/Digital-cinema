import { Skeleton } from './ui/skeleton';

const MoviesSkeleton = () => {
  const skeletonItems = Array(6).fill(null);

  return (
    <div className="flex flex-col gap-2 my-6">
      {skeletonItems.map((_, index) => (
        <Skeleton key={index} className="flex flex-col md:flex-row p-4 rounded-lg">
          <Skeleton className="w-[200px] h-[300px] rounded-md" />
          <div>
            <Skeleton className="w-1/2 h-2 rounded-full" />
            <Skeleton className="w-full h-2 rounded-full" />
            <Skeleton className="w-full h-2 rounded-full" />
            <Skeleton className="w-full h-2 rounded-full" />
          </div>
        </Skeleton>
      ))}
    </div>
  );
};

export default MoviesSkeleton;
