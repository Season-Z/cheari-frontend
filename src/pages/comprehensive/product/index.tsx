import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Card } from 'antd';

const Product = () => {
  const { data } = useCyberFetch({ url: '/api/print/order', method: 'get' });

  return (
    <div className="flex items-start gap-4 h-full">
      <CardBlock title="产品介绍" className="flex-1 h-full">
        <div dangerouslySetInnerHTML={{ __html: 'aaa' }} />
      </CardBlock>
      <CardBlock title="3D打印方案" className="w-[300px]">
        <div className="flex flex-col gap-4">
          {data?.result?.map((v) => (
            <Card
              key={v.orderId}
              hoverable
              cover={
                <img
                  alt="example"
                  className=" h-[160px] object-contain p-2"
                  src={`http://localhost:3280/${v?.orderFileImage}`}
                />
              }
              size="small"
            />
          ))}
        </div>
      </CardBlock>
    </div>
  );
};

export default Product;
