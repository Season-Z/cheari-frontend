import { Badge, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const router = useNavigate();

  return (
    <div className="grid grid-cols-5 gap-4">
      <Badge.Ribbon text="Hippies" color="volcano">
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
              onClick={() => router('/members/order-detail')}
            />
          }
          size="small"
        >
          <Card.Meta title="Europe Street beat" />
        </Card>
      </Badge.Ribbon>

      <Card
        hoverable
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
        size="small"
      >
        <Card.Meta title="Europe Street beat" />
      </Card>
    </div>
  );
};

export default Order;
