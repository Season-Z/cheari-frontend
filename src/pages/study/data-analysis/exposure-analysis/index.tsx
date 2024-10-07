import { getPieConfig, PieCharts } from '@/components/charts/pie-charts';
import Gap from '@/components/gap';
import { add } from '@/utils/math';
import { CardBlock } from '@cyberutopian/components';

const aa = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '其他', value: 5 },
];

const ExposureAnalysis = () => {
  const levelConfig = getPieConfig({
    data: aa,
    title: '漏洞总数',
    content: `${aa?.reduce((r, d) => add(r, d.value || 0), 0)}`,
    legend: {
      offsetX: -10,
    },
  });

  return (
    <div className="grid grid-cols-2 gap-4">
      <CardBlock className="px-[24px] py-[16px]" title="冰箱">
        <Gap />
        <PieCharts config={levelConfig} />
      </CardBlock>
      <CardBlock className="px-[24px] py-[16px]" title="洗衣机">
        <Gap />
        <PieCharts config={levelConfig} />
      </CardBlock>
      <CardBlock className="px-[24px] py-[16px]" title="空调">
        <Gap />
        <PieCharts config={levelConfig} />
      </CardBlock>
    </div>
  );
};

export default ExposureAnalysis;
