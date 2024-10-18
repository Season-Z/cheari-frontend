import { useRouterState } from '@/packages/@cyberutopian/hooks';
import { Card } from 'antd';
import { PrintStepType } from '../type';

const list = [
  { value: 0, label: '免费打磨' },
  { value: 300, label: '喷砂' },
  { value: 300, label: '电镀' },
  { value: 150, label: '单色喷漆' },
  { value: 300, label: '双色喷漆' },
  { value: 450, label: '三色喷漆' },
];

const Five = () => {
  const [_, setState] = useRouterState<PrintStepType>();

  return (
    <div>
      <div className="text-center title-20 mb-8">选择打印后处理方式</div>

      <div className="grid grid-cols-4 gap-4">
        {list.map((v) => (
          <Card
            key={v.label}
            hoverable
            title={v.label}
            actions={[
              <div
                onClick={() =>
                  setState((i) => ({
                    ...i,
                    data: { ...i.data, orderTech: v.label, price: v.value, orderNumber: 1 },
                    current: 5,
                  }))
                }
              >
                选择
              </div>,
            ]}
          >
            <p>单件价格</p>
            <div className="text-error-hover">{v.value}元</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Five;
