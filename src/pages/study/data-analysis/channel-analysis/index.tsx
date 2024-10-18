import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Column } from '@ant-design/plots';
import { useMemo } from 'react';

const type = {
  1: '冰箱',
  2: '洗衣机',
  3: '空调',
};

const ChannelAnalysis = () => {
  const { data } = useCyberFetch({ url: '/api/study', method: 'post' });

  const list = useMemo(() => data?.result?.map((v) => ({ ...v, dataType: type[v.dataType] })) || [], [data?.result]);

  const config = {
    data: list || [],
    xField: 'dataChannel',
    yField: 'dataNature',
    seriesField: 'dataType',
    stack: {
      groupBy: ['x', 'series'],
      series: false,
    },

    colorField: 'dataBrand',
    interaction: {
      tooltip: {
        shared: true,
      },
    },
  };
  return (
    <CardBlock>
      <Column {...config} />
    </CardBlock>
  );
};

export default ChannelAnalysis;
