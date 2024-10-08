import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import Assets from './components/assets';
import Profile from './components/profile';

const Person = () => {
  return (
    <div>
      <CardBlock>
        <Profile />
      </CardBlock>
      <Gap />
      <CardBlock>
        <Assets />
      </CardBlock>
    </div>
  );
};

export default Person;
