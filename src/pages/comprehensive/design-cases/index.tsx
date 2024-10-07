import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { List, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const data = [
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
  return (
    <div>
      <CardBlock title="设计方案介绍">
        <Typography>
          <Paragraph>
            In the process of internal desktop applications development, many different design specs and implementations
            would be involved, which might cause designers and developers difficulties and duplication and reduce the
            efficiency of development.
          </Paragraph>
        </Typography>
      </CardBlock>
      <Gap />
      <CardBlock title="智能家电大赛">
        <List
          dataSource={data}
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
