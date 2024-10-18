import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Button, Image } from 'antd';
import { useParams } from 'react-router-dom';

const PrintCasesDetail = () => {
  const params = useParams();
  const { data } = useCyberFetch({ url: `/api/print/order/${params.id}`, method: 'get' });

  return (
    <CardBlock>
      <div className="text-right">
        <Button type="primary">投一票</Button>
      </div>

      <div className="pt-8 text-center">
        <Image width={300} src={`http://localhost:3280/${data?.result?.orderFileImage}`} />
      </div>
      <p className="mt-6 px-20 break-all">{data?.result?.orderFileContent}</p>
    </CardBlock>
  );
};

export default PrintCasesDetail;
