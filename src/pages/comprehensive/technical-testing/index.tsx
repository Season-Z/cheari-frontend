import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { Card } from 'antd';

const TechnicalTesting = () => {
  return (
    <CardBlock>
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
      </div>
    </CardBlock>
  );
};

export default TechnicalTesting;
