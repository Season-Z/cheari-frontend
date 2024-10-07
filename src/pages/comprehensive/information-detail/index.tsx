import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const InformationDetail = () => {
  return (
    <CardBlock className="h-full">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="flex items-start gap-4">
        <List dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
        <div>content</div>
      </div>
    </CardBlock>
  );
};

export default InformationDetail;
