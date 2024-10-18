import { CardBlock } from '@/packages/@cyberutopian/components';
import { cyberFetch, useCyberFetch } from '@/request';
import { HeartTwoTone } from '@ant-design/icons';
import { Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const PrintCases = () => {
  const router = useNavigate();

  const { data, sendRequest } = useCyberFetch({ url: '/api/print/order', method: 'get', data: { orderStatus: 0 } });

  const handleFavorite = async (orderId, orderLike) => {
    const result = await cyberFetch({
      url: '/api/print/order',
      method: 'put',
      data: { orderId, orderLike: orderLike + 1 },
    });
    if (result.success) {
      message.success('操作成功');
      sendRequest();
    }
  };

  return (
    <CardBlock className="h-full">
      <div className="grid grid-cols-5 gap-4">
        {data?.result?.map((v) => (
          <Card
            key={v.orderId}
            hoverable
            cover={
              <img
                alt="example"
                className="w-full h-[230px]  object-contain p-2"
                src={`http://localhost:3280/${v?.orderFileImage}`}
                onClick={() => router(`/print/print-cases/${v.orderId}`)}
              />
            }
            actions={[
              // <div onClick={() => handleVote(v.orderId)}>投票</div>,
              <div>
                <HeartTwoTone twoToneColor="#eb2f96" onClick={() => handleFavorite(v.orderId, v.orderLike)} />
                <span className="ml-2 text-text-3">{v.orderLike}</span>
              </div>,
            ]}
          />
        ))}
      </div>
    </CardBlock>
  );
};

export default PrintCases;
