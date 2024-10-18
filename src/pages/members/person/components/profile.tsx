import { useGlobalContext } from '@/providers/global';
import { SettingOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const router = useNavigate();
  const { user } = useGlobalContext();

  return (
    <div className="flex justify-between items-end px-8">
      <div className="flex items-center gap-4">
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          src={`http://localhost:3280/${user?.userAvatar}`}
        />
        <div>
          <div className="mb-3">
            <span className="title-20 mr-4">{user?.userUsername}</span>
            <Link to="/members/point">积分 {user?.userScore}</Link>
          </div>
          <div>IP属地：北京</div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-3">
        <Button onClick={() => router('/members/message')}>我的消息</Button>
        <Button onClick={() => router('/members/account')}>编辑资料</Button>
        <Button icon={<SettingOutlined />} onClick={() => router('/members/settings')} />
      </div>
    </div>
  );
};

export default Profile;
