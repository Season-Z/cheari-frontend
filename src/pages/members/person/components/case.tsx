import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { Badge, Card } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import VoteModal from './vote-modal';

const Case = () => {
  const router = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleVote = () => {
    setVisible(true);
  };

  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-4">
        <Badge.Ribbon text="Hippies" color="volcano">
          <Card
            hoverable
            cover={
              <img
                alt="example"
                className="p-2"
                src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                onClick={() => router('/members/case-detail')}
              />
            }
            size="small"
            actions={[<div onClick={handleVote}>投票</div>, <HeartTwoTone twoToneColor="#eb2f96" />]}
          ></Card>
        </Badge.Ribbon>

        <Card
          hoverable
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
          size="small"
          actions={[<div>投票</div>, <HeartOutlined />]}
        ></Card>

        <Badge.Ribbon text="Hippies" color="volcano">
          <Card
            hoverable
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
            size="small"
            actions={[<div>投票</div>, <HeartOutlined />]}
          ></Card>
        </Badge.Ribbon>
        <Card
          hoverable
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
          size="small"
          actions={[<div>投票</div>, <HeartOutlined />]}
        ></Card>
        <Badge.Ribbon text="Hippies" color="volcano">
          <Card
            hoverable
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
            size="small"
            actions={[<div>投票</div>, <HeartOutlined />]}
          ></Card>
        </Badge.Ribbon>
      </div>
      {visible ? <VoteModal visible={visible} onClose={() => setVisible(false)} /> : null}
    </Fragment>
  );
};

export default Case;
