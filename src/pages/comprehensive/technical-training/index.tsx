import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const TechnicalTraining = () => {
  const router = useNavigate();

  const { data } = useCyberFetch({ url: '/api/platform/train', method: 'get' });

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
              key={v.trainingId}
              hoverable
              cover={
                <img
                  alt="example"
                  className="w-full h-[230px] object-contain p-2"
                  src={`http://localhost:3280/${v?.trainingImage}`}
                />
              }
              size="small"
              onClick={() => router(`/comprehensive/technical-training/${v.trainingId}`)}
            >
              <Card.Meta title={v.trainingTitle} />
            </Card>
          ))}
      </div>
    </CardBlock>
  );
};

export default TechnicalTraining;
