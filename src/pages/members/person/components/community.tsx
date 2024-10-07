import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const router = useNavigate();

  return (
    <div className="grid grid-cols-5 gap-4">
      <Card
        hoverable
        cover={
          <img
            alt="example"
            className="p-2"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            onClick={() => router('/members/community-detail')}
          />
        }
        size="small"
      >
        <Card.Meta title="Europe Street beat" />
      </Card>
    </div>
  );
};

export default Community;
