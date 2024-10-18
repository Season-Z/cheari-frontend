import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useRouterState } from '@/packages/@cyberutopian/hooks';
import First from './components/first';
import Five from './components/five';
import Four from './components/four';
import Second from './components/second';
import Six from './components/six';
import Three from './components/three';
import { PrintStepType } from './type';

const CreatePrint = () => {
  const [state] = useRouterState<PrintStepType>({ current: 0, data: {} });

  const renderStep = () => {
    if (state.current === 0) {
      return <First />;
    }
    if (state.current === 1) {
      return <Second />;
    }
    if (state.current === 2) {
      return <Three />;
    }
    if (state.current === 3) {
      return <Four />;
    }
    if (state.current === 4) {
      return <Five />;
    }
    if (state.current === 5) {
      return <Six />;
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

export default CreatePrint;
