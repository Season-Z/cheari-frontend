import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const router = useNavigate();
  const { data } = useCyberFetch({ url: '/api/platform/info', method: 'get' });

  return (
    <CardBlock>
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data?.result?.map((v) => (
          <Card
            key={v.informationId}
            hoverable
            cover={
              <img
                alt="example"
                className="h-[160px] object-contain p-2"
                src={`http://localhost:3280/${v?.informationImage}`}
              />
            }
            size="small"
            onClick={() => router(`/comprehensive/information/${v.informationId}`)}
          >
            <Card.Meta title={v.informationTitle} description={v.informationContent} />
          </Card>
        ))}
      </div>
    </CardBlock>
  );
};

export default Information;
