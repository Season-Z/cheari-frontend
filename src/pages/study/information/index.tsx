import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useRouterState } from '@/packages/@cyberutopian/hooks';
import SearchOptions from './components/search-options';
import TaleList from './components/tale-list';

const Information = () => {
  useRouterState<any>({});

  return (
    <CardBlock>
      <SearchOptions />
      <Gap />
      <TaleList />
    </CardBlock>
  );
};

export default Information;
