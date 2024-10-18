import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { List, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const datas = [
  {
    content: 'Racing car sprays burning fuel into crowd.',
    time: '2023-09-10',
  },
  {
    content: 'Japanese princess to wed commoner.',
    time: '2024-09-10',
  },
  {
    content: 'Australian walks 100km after outback crash.',
    time: '2023-09-10',
  },
  {
    content: 'Man charged over missing wedding girl..',
    time: '2023-09-10',
  },
  {
    content: 'Racing car sprays burning fuel into crowd.',
    time: '2023-09-10',
  },
];

const DesignCases = () => {
  const { data } = useCyberFetch({ url: '/api/platform/design', method: 'get' });

  return (
    <div>
      <CardBlock>
        <Typography>
          <Paragraph>{data?.result[0]?.schemeContent}</Paragraph>
        </Typography>
      </CardBlock>
      <Gap />
      <CardBlock title="智能家电大赛">
        <List
          dataSource={datas}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.content} />
              <div>{item.time}</div>
            </List.Item>
          )}
        />
      </CardBlock>
    </div>
  );
};

export default DesignCases;
