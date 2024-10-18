import { CardBlock } from '@/packages/@cyberutopian/components';
import { formatTime } from '@/utils';
import { Bar } from '@ant-design/plots';
import { groupBy } from 'lodash';
import { FC, useMemo } from 'react';

const Quantity: FC<{ className: string; data: any }> = ({ className, data }) => {
  const list = useMemo(() => {
    const d = data.map((v) => ({ ...v, dataPublishTime: formatTime(v.dataPublishTime, 'YYYY/MM') }));
    const group = groupBy(d, 'dataPublishTime');

    return Object.keys(group).map((v) => {
      return {
        dataPublishTime: v,
        value: group[v].length,
      };
    });
  }, [data]);

  const config = {
    data: list,
    xField: 'dataPublishTime',
    yField: 'value',
  };

  return (
    <CardBlock className={className} title="每月舆情量">
      <Bar {...config} />
    </CardBlock>
  );
};

export default Quantity;
