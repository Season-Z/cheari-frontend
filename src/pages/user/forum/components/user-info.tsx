import Gap from '@/components/gap';
import { useGlobalContext } from '@/providers/global';
import { useCyberFetch } from '@/request';
import { Avatar, Divider } from 'antd';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const { user } = useGlobalContext();

  const { data } = useCyberFetch({ url: `/api/print/order/user/recommend` });

  return (
    <div className="text-center">
      <Avatar size={64} src={`http://localhost:3280/${user.userAvatar}`} />
      <div className="title-18 mt-4">{user?.userUsername}</div>

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
          {data?.result?.map((v) => (
            <li className="truncate" key={v.orderId}>
              {v.orderStatus === 0 ? (
                <Link to={`/members/case-detail?orderId=${v.orderId}`}>{v.orderFileContent}</Link>
              ) : (
                <Link to={`/members/order-detail?orderId=${data?.orderId}`}>{v.orderFileContent}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
