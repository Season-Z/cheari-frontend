import { CardBlock } from '@cyberutopian/components';
import { Card } from 'antd';

const Product = () => {
  return (
    <div className="flex items-start gap-4">
      <CardBlock title="产品介绍" className="flex-1">
        <div dangerouslySetInnerHTML={{ __html: 'aaa' }} />
      </CardBlock>
      <CardBlock title="3D打印方案" className="w-[300px]">
        <div className="flex flex-col gap-4">
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
          />

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
          />
        </div>
      </CardBlock>
    </div>
  );
};

export default Product;
