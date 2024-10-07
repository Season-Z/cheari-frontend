import { Bar } from '@ant-design/plots';
import { CardBlock } from '@cyberutopian/components';
import { FC } from 'react';

const Quantity: FC<{ className: string }> = ({ className }) => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/bar-bar.json',
    },
    xField: 'letter',
    yField: 'frequency',
    sort: {
      reverse: true,
    },
    label: {
      text: 'frequency',
      formatter: '.1%',
      style: {
        textAlign: (d) => (+d.frequency > 0.008 ? 'right' : 'start'),
        fill: (d) => (+d.frequency > 0.008 ? '#fff' : '#000'),
        dx: (d) => (+d.frequency > 0.008 ? -5 : 5),
      },
    },
    axis: {
      y: {
        labelFormatter: '.0%',
      },
    },
  };

  return (
    <CardBlock className={className} title="每月舆情量">
      <Bar {...config} />
    </CardBlock>
  );
};

export default Quantity;
