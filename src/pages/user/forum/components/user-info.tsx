import Gap from '@/components/gap';
import { Avatar, Divider } from 'antd';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  return (
    <div className="text-center">
      <Avatar size={64} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <div className="title-18 mt-4">用户名</div>

      <Divider />
      <div className="text-16 text-main-hover">
        <Link to="/user/forum/reply-list">查看回复</Link>
        <Gap />
        <Link to="/user/forum/chat-list">查看私信</Link>
      </div>
      <Divider />

      <div className="text-left text-14">
        <div className="text-text-2 mb-2">推荐</div>
        <ul className="text-main-hover flex flex-col gap-1">
          <li className="truncate">3D材质选择3D材质选择3D材质选择3D材质选择3D材质选择</li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
