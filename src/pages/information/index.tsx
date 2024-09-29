import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { useRouterState } from '@cyberutopian/hooks';
import ButtonOptions from './components/search-options';
import TaleList from './components/tale-list';

const Information = () => {
  useRouterState<any>({});

  return (
    <CardBlock>
      <ButtonOptions />
      <Gap />
      <TaleList />
    </CardBlock>
  );
};

export default Information;
