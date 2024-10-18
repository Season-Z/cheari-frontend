import { cyberFetch, useCyberFetch } from '@/request';
import { HeartTwoTone } from '@ant-design/icons';
import { Badge, Card, message } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import VoteModal from './vote-modal';

const Case: FC<{ search: string | undefined }> = ({ search }) => {
  const router = useNavigate();
  const { data, sendRequest } = useCyberFetch({
    url: '/api/print/order/user',
    method: 'get',
    data: { orderStatus: 0, orderFileContent: search || undefined },
  });

  const [visible, setVisible] = useState(false);

  const handleVote = (id) => {
    setVisible(true);
  };

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

  const CardComp = ({ data }: { data: any }) => (
    <Card
      key={data.orderId}
      hoverable
      cover={
        <img
          alt="example"
          className="w-full h-[230px]  object-contain p-2"
          src={`http://localhost:3280/${data?.orderFileImage}`}
          onClick={() => router(`/members/case-detail?orderId=${data.orderId}`)}
        />
      }
      actions={[
        <div onClick={() => handleVote(data.orderId)}>投票</div>,
        <div>
          <HeartTwoTone twoToneColor="#eb2f96" onClick={() => handleFavorite(data.orderId, data.orderLike)} />
          <span className="ml-2 text-text-3">{data.orderLike}</span>
        </div>,
      ]}
    />
  );

  return (
    <Fragment>
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
      {visible ? <VoteModal visible={visible} onClose={() => setVisible(false)} /> : null}
    </Fragment>
  );
};

export default Case;
