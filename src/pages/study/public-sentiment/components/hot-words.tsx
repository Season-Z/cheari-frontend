import { CardBlock } from '@/packages/@cyberutopian/components';
import { WordCloud } from '@ant-design/plots';
import { FC } from 'react';

const HotWords: FC<{ className: string }> = ({ className }) => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/philosophy-word.json',
    },
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
