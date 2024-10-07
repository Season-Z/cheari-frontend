import { CardBlock } from '@cyberutopian/components';
import { Outlet } from 'react-router-dom';
import UserInfo from './forum/components/user-info';

const study = () => {
  return (
    <div className="grid grid-cols-8 items-start gap-4 h-full">
      <CardBlock className="col-span-6 h-full">
        <Outlet />
      </CardBlock>
      <CardBlock className="col-span-2">
        <UserInfo />
      </CardBlock>
    </div>
  );
};

export default study;
