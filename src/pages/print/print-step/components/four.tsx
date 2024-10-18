import { useRouterState } from '@/packages/@cyberutopian/hooks';
import { Card } from 'antd';
import { PrintStepType } from '../type';

const list = [
  { value: 'SLA', label: '树脂光固化成型' },
  { value: 'SLS', label: '激光烧结成型' },
  { value: 'MJF', label: '惠普尼龙多流射融成型' },
  { value: 'FDM', label: '热塑性拆料熔融成型' },
  { value: 'SLM', label: '金属激光烧结成型' },
];

const Four = () => {
  const [_, setState] = useRouterState<PrintStepType>();

  return (
    <div>
      <div className="text-center title-20 mb-8">选择打印材料</div>
      <div className="grid grid-cols-4 gap-4">
        {list.map((v) => (
          <Card
            key={v.value}
            hoverable
            title={v.value}
            actions={[
              <div
                onClick={() =>
                  setState((i) => ({
                    ...i,
                    data: { ...i.data, orderMaterial: v.value, material: v.label },
                    current: 4,
                  }))
                }
              >
                选择
              </div>,
            ]}
          >
            <p>{v.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Four;
