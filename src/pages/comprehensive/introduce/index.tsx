import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const Introduce = () => {
  const { data } = useCyberFetch({ url: '/api/platform/info', method: 'get' });

  const info = data?.result?.[0];

  return (
    <CardBlock className="h-full">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <Typography>
        <Title>{info?.informationTitle}</Title>

        <Paragraph className="mt-[24px]">{info?.informationContent}</Paragraph>
      </Typography>
    </CardBlock>
  );
};

export default Introduce;
