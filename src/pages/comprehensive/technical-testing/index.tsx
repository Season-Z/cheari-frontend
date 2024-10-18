import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Card } from 'antd';

const TechnicalTesting = () => {
  const { data } = useCyberFetch({ url: '/api/platform/detect', method: 'get' });

  return (
    <CardBlock className="h-full">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data?.result &&
          data?.result?.map((v) => (
            <Card
              key={v.detectionId}
              hoverable
              cover={
                <img
                  alt="example"
                  className="w-full h-[230px] object-contain p-2"
                  src={`http://localhost:3280/${v?.detectionImage}`}
                />
              }
              size="small"
            >
              <Card.Meta title={v.detectionTitle} />
            </Card>
          ))}
      </div>
    </CardBlock>
  );
};

export default TechnicalTesting;
