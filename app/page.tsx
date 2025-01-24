import Carousel from '@/components/ui/carousel';
import { Data } from '@/types';

const Page = async () => {
  const response = await fetch(`${process.env.API_URL}/recommendations/19995`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f8a6283890msh85a88cddfb891edp105cc0jsne52d748a20d2',
      'x-rapidapi-host': 'advance-movie-api.p.rapidapi.com',
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const movis: Data = await response.json();

  return (
    <div className="container overflow-hidden">
      <Carousel slides={movis.result.data.slice(0, 6)} />
    </div>
  );
};

export default Page;
