import { useCyberFetch } from '@/request';
import { Badge, Card } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Order: FC<{ search: string | undefined }> = ({ search }) => {
  const router = useNavigate();
  const { data } = useCyberFetch({
    url: '/api/print/order/user',
    method: 'get',
    data: { orderStatus: 1, orderFileContent: search || undefined },
  });

  const CardComp = ({ data }: { data: any }) => (
    <Card
      key={data?.orderId}
      hoverable
      cover={
        <img
          alt="example"
          className="w-full h-[230px]  object-contain p-2"
          src={`http://localhost:3280/${data?.orderFileImage}`}
          onClick={() => router(`/members/order-detail?orderId=${data?.orderId}`)}
        />
      }
    >
      <Card.Meta title="订单" />
    </Card>
  );

  return (
    <div className="grid grid-cols-5 gap-4">
      {data?.result?.map((v) =>
        v.orderFlagPublic === 0 ? (
          <Badge.Ribbon text="公开" color="volcano">
            <CardComp data={v} />
          </Badge.Ribbon>
        ) : (
          <CardComp data={v} />
        ),
      )}
    </div>
  );
};

export default Order;
