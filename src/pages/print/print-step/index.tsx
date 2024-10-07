import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { useState } from 'react';
import Contact from '../create-print/components/contact';
import First from './components/first';
import Five from './components/five';
import Four from './components/four';
import Second from './components/second';
import Six from './components/six';
import Three from './components/three';

const PrintStep = () => {
  const [current, setCurrent] = useState(0);

  const renderStep = () => {
    if (current === 0) {
      return <First setCurrent={setCurrent} />;
    }
    if (current === 1) {
      return <Second setCurrent={setCurrent} />;
    }
    if (current === 2) {
      return <Three setCurrent={setCurrent} />;
    }
    if (current === 3) {
      return <Four setCurrent={setCurrent} />;
    }
    if (current === 4) {
      return <Five setCurrent={setCurrent} />;
    }
    if (current === 5) {
      return <Six setCurrent={setCurrent} />;
    }
  };

  return (
    <CardBlock className="h-full" title="提交3D打印需求">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      {renderStep()}
    </CardBlock>
  );
};

export default PrintStep;
