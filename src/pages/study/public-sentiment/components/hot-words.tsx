import { CardBlock } from '@/packages/@cyberutopian/components';
import { WordCloud } from '@ant-design/plots';
import { groupBy } from 'lodash';
import { FC, useMemo } from 'react';

const HotWords: FC<{ className: string; data: any }> = ({ className, data }) => {
  const list = useMemo(() => {
    const group = groupBy(data, 'dataHotword');

    return Object.keys(group).map((v) => ({ text: v, value: group[v].length })) || [];
  }, [data]);

  const config = {
    paddingTop: 40,
    data: list,
    layout: { spiral: 'rectangular' },
    colorField: 'text',
  };
  return (
    <CardBlock className={className} title="热词">
      <WordCloud {...config} />
    </CardBlock>
  );
};

export default HotWords;
