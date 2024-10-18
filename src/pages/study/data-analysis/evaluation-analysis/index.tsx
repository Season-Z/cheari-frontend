import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Column } from '@ant-design/plots';
import { useMemo } from 'react';

const type = {
  1: '冰箱',
  2: '洗衣机',
  3: '空调',
};

const EvaluationAnalysis = () => {
  const { data: data } = useCyberFetch({ url: '/api/study', method: 'post', data: {} });

  const li = useMemo(() => {
    if (!data?.result) {
      return [];
    }

    return data?.result.map((v) => {
      const l = data?.result.filter((i) => i.dataKeyword === v.dataKeyword && v.dataType === i.dataType);

      return {
        xField: v.dataKeyword,
        name: type[v.dataType],
        yField: l.length,
      };
    });
  }, [data]);

  const config = {
    data: li,
    xField: 'xField',
    yField: 'yField',
    colorField: 'name',
    group: true,
    style: {
      inset: 5,
    },
  };

  return (
    <CardBlock>
      <Column {...config} />
    </CardBlock>
  );
};

export default EvaluationAnalysis;
