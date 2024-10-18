import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Card } from 'antd';
import { Fragment } from 'react';

const Expert = () => {
  const { data } = useCyberFetch({ url: '/api/platform/expert', method: 'get' });

  return (
    <CardBlock className="h-full">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {data?.result &&
          data?.result?.map((v) => (
            <Card
              key={v.expertId}
              hoverable
              cover={
                <img
                  alt="example"
                  className=" h-[160px] object-contain p-2"
                  src={`http://localhost:3280/${v?.expertImage}`}
                />
              }
              size="small"
            >
              <Card.Meta
                title={
                  <Fragment>
                    <p>{v.expertName}</p>
                  </Fragment>
                }
                description={v.expertContent}
              />
            </Card>
          ))}
      </div>
    </CardBlock>
  );
};

export default Expert;
