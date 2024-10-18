import { useCyberFetch } from '@/request';
import HotWords from './components/hot-words';
import PopularComments from './components/popular-comments';
import Quantity from './components/quantity';

const PublicSentiment = () => {
  const { data } = useCyberFetch({ url: '/api/study', method: 'post' });

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
      <Quantity className="col-span-1 row-span-2" data={data?.result || []} />
      <HotWords className="col-span-1 row-span-1" data={data?.result || []} />
      <PopularComments className="col-span-1 row-span-1" data={data?.result || []} />
    </div>
  );
};

export default PublicSentiment;
