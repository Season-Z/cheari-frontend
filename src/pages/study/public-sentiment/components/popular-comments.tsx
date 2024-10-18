import { CardBlock } from '@/packages/@cyberutopian/components';
import { Bar } from '@ant-design/plots';
import { orderBy, take } from 'lodash';
import { FC, useMemo } from 'react';

const PopularComments: FC<{ className: string; data: any }> = ({ className, data }) => {
  const list = useMemo(() => {
    const d = orderBy(data, 'dataDiscuss');

    return take(d, 10);
  }, [data]);

  const config = {
    data: list,
    xField: 'dataTitle',
    yField: 'dataDiscuss',
    colorField: 'dataTitle',
  };
  return (
    <CardBlock title="热门评论TOP10" className={className}>
      <Bar {...config} />
    </CardBlock>
  );
};

export default PopularComments;
