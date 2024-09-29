import HotWords from './components/hot-words';
import PopularComments from './components/popular-comments';
import Quantity from './components/quantity';

const PublicSentiment = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
      <Quantity className="col-span-1 row-span-2" />
      <HotWords className="col-span-1 row-span-1" />
      <PopularComments className="col-span-1 row-span-1" />
    </div>
  );
};

export default PublicSentiment;
