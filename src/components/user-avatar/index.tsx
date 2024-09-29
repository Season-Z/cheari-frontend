import { useGlobalContext } from '@/providers/global';
import { FC } from 'react';
import AvatarIcon from '../avatar-icon';

const UserAvatar: FC<{ size: number; className?: string }> = ({ size, className = '' }) => {
  const { user } = useGlobalContext();

  return (
    <AvatarIcon
      avatar={user?.avatar}
      username={user?.username || ''}
      nickname={user?.nickname || ''}
      size={size}
      className={className}
    />
  );
};

export default UserAvatar;
