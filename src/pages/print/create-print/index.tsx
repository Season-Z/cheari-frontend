import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { Button } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatePrint = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <CardBlock title="提交3D打印需求" className="h-full flex-col">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <img src="/images/p1.png" className="w-full h-[150px]" />
      <div className="flex-1 flex justify-center items-center h-full">
        <Button type="primary">
          <Link to="/print/create-print/print-step">一键打印</Link>
        </Button>
      </div>
      <img src="/images/p1.png" className="w-full h-[150px]" />
    </CardBlock>
  );
};

export default CreatePrint;
